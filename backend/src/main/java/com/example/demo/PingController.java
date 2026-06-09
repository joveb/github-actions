package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @GetMapping("/health")
    public java.util.Map<String, String> health() {
        return java.util.Map.of(
            "status", "UP",
            "app", "demo",
            "version", "0.0.1-SNAPSHOT"
        );
    }
}
