package com.workingschedule.controller;

import com.workingschedule.controller.dto.WorkerDTO;
import com.workingschedule.service.WorkerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    private WorkerService workerService;

    //Create
    @PostMapping
    public WorkerDTO addWorker(@RequestBody WorkerDTO workerDTO){
        return workerService.addWorker(workerDTO);
    }
}
