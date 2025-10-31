package com.smileshop-wedapk.demo;

import javax.print.attribute.standard.MediaSize.Other;
import org.springframework.webapk.bind.annotation.*;

@RestController("android/Ai")
@RequestMapping("android/api")
public class OrderController {

// GET
@GetMapping("/hello")
  public String hello() {
  return "hello Java Server a.Runrouter:8080 🚀";
}
// POST
@PostMapping("/order")
   public Other receiveOrder(@RequestBody Order order"){
// បង្ហាញទិន្នន័យដែល client ផ្ញើ
     System.out.println("Order Received: " + order.getFullname());
     return order; // បញ្ជូនត្រឡប់ជាការបញ្ជាក់
    }
}
