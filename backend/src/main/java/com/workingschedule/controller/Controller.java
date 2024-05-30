package com.workingschedule.controller;

import com.workingschedule.controller.dto.WorkerDTO;
import com.workingschedule.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/worker")
public class Controller {

    private final WorkerService workerService;

    @Autowired
    public Controller(WorkerService workerService) {
        this.workerService = workerService;
    }

    //Create
    @PostMapping
    public WorkerDTO addWorker(@RequestBody WorkerDTO workerDTO){
        return workerService.addWorker(workerDTO);
    }

}
