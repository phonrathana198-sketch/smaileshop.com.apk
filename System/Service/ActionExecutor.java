package com.ai.controller.service.Android.sdk;

public class ActionExecutor {
    public String execute(String action) {
        switch (action) {
            case "RESTART_SERVICE":
                return "⚙️ Restarting service automatically...";
            case "IDLE_MODE":
                return "💤 System in idle mode.";
            default:
                return "✅ System running normally.";
        }
    }
}
