package com.workingschedule.controller;

import com.workingschedule.model.dto.EmployeeDTO;
import com.workingschedule.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/worker")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //Create
    @PostMapping
    public EmployeeDTO addEmployee(@RequestBody EmployeeDTO employeeDTO){
        return employeeService.addEmployee(employeeDTO);
    }

}
