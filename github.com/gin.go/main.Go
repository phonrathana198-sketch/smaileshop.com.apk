package com.ai.servis

import (
	"log"
	"net/http"
	"net/url"
	"github.com/gin-gonic/gin"
)

// Simple struct for JSON response
type SearchResult struct {
	Title string `json:"title"`
	Link  string `json:"link"`
	Snippet string `json:"snippet"`
}

func main() {
	r := gin.Default()

	// Middleware for CORS (allow HTML frontend to call API)
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, Content-Type, Accept")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	// Root route
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Gin Search API Running ✅")
	})

	// /api/search?q=keyword
	r.GET("/api/search", func(c *gin.Context) {
		query := c.Query("q")
		if query == "" {
			c.JSON(http.StatusBadRequest, gin.H{"error": "missing query"})
			return
		}

		// For demo → mock results (you can connect real Google API later)
		results := []SearchResult{
			{Title: "Google", Link: "https://www.google.com/search?q=" + url.QueryEscape(query), Snippet: "Search results for " + query},
			{Title: "Wikipedia", Link: "https://en.wikipedia.org/wiki/" + url.QueryEscape(query), Snippet: "Wikipedia article for " + query},
			{Title: "YouTube", Link: "https://www.youtube.com/results?search_query=" + url.QueryEscape(query), Snippet: "YouTube videos for " + query},
		}

		c.JSON(http.StatusOK, gin.H{
			"query": query,
			"count": len(results),
			"data":  results,
		})
	})

	log.Println("Server running at http://localhost:8080")
	r.Run(":8080")
}
