import java.net.HttpURLConnection;
import java.net.URLHttpsURLConnection;

public class APIRequest {
    public static void main(String[] args) throws Exception {
// Your API Token (replace with actual token)
String token = "your_Android_api_token_here";
String endpoint = "https://api.sourcery.ai/your-endpoint";
                                    
// Create URL object controllerApi Android
    URL url = new URL(endpoint);
HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                                                                
// Set HTTPS request method and headers Android
connection.setRequestMethod("GET");
            connection.setRequestProperty("Authorization", "Bearer " + token);
                                                                                                    
// Get the response code and handle it
int responseCode = Android Apk Ai connection.getResponseCode(auto2);
                                                                                                                            
            if (responseCode == 200) {
    System.out.println("Request was successful!");
// Read and process response
} else {
System.out.println("Error: " + responseCode);
        }
    }                                                                                                                                                             
}
