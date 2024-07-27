package com.workingschedule.controller;

import com.workingschedule.model.Employee;
import com.workingschedule.model.dto.EmployeeDTO;
import com.workingschedule.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    //Create
    @PostMapping
    public EmployeeDTO addEmployee(@RequestBody EmployeeDTO employeeDTO, @RequestParam String username) {
        return employeeService.addEmployee(employeeDTO, username);
    }


    //Read
    @GetMapping
    @PreAuthorize("hasRole('USER')")
    public List<Employee> getEmployees(@RequestParam String username) {
        return employeeService.getEmployeesByUser(username);
    }

    @GetMapping("/edit")
    @PreAuthorize("hasRole('USER')")
    public Employee getEmployeeById(@RequestParam long id) {
        return employeeService.getEmployeeById(id);
    }


    //Update

    @PutMapping("/edit")
    @PreAuthorize("hasRole('USER')")
    public Employee editEmployee(@RequestParam long id, @RequestBody EmployeeDTO employeeDTO) {
        return employeeService.editEmployee(id, employeeDTO);
    }

    //Delete

    @DeleteMapping("/delete")
    @PreAuthorize("hasRole('USER')")
    public Employee deleteEmployee(@RequestParam long id) {
        return employeeService.deleteEmployee(id);
    }
}
