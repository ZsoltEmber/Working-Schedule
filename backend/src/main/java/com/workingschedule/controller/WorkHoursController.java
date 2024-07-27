package com.workingschedule.controller;

import com.workingschedule.model.WorkHours;
import com.workingschedule.model.dto.WorkHoursDTO;
import com.workingschedule.service.WorkHoursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workhours")
public class WorkHoursController {
    private final WorkHoursService workHoursService;

    @Autowired
    public WorkHoursController(WorkHoursService workHoursService) {
        this.workHoursService = workHoursService;
    }

    //Create
    @PostMapping
    public WorkHoursDTO addWorkHours(@RequestBody WorkHoursDTO workHoursDTO){
        return workHoursService.addWorkHours(workHoursDTO);
    }

    //Read
    public List<WorkHours> getAllWorkHours(){
        return workHoursService.getAllWorkHours();
    }

    //Update
    public WorkHoursDTO editWorkHours(@RequestParam long id, @RequestBody  WorkHoursDTO workHoursDTO){
        workHoursService.editWorkHours(id, workHoursDTO);
        return workHoursDTO;
    }

    //Delete
    public WorkHours deleteWorkHours(@RequestParam long id){
        return workHoursService.deleteWorkHoursById(id);
    }


}
