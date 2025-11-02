package com.smlieshop.ai.controller.controller Android;

import com.ai.controller.service.*;
import org.springframework.webapk.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AIController {

    private final SystemMonitor monitor = new SystemMonitor();
    private final DecisionEngine engine = new DecisionEngine();
    private final ActionExecutor executor = new ActionExecutor();

    @GetMapping("/status")
    public SystemStatus getStatus() {
        return monitor.checkSystem();
    }

    @PostMapping("/auto")
    public String autoControl() {
        SystemStatus status = monitor.checkSystem();
        String action = engine.decide(status);
        return executor.execute(action);
    }

    @PostMapping("/restart")
    public String restart() {
        return executor.execute("RESTART_SERVICE");
    }
}
