package com.workingschedule.service;

import com.workingschedule.model.dto.EmployeeDTO;
import com.workingschedule.model.Employee;
import com.workingschedule.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepositoryRepository;
    @Autowired
    public EmployeeService(EmployeeRepository workerRepository) {
        this.employeeRepositoryRepository = workerRepository;
    }

    public EmployeeDTO addEmployee(EmployeeDTO workerDTO){
        Employee worker = new Employee();
        worker.setName(workerDTO.name());
        worker.setMonthlyRequiredWorkingHours(workerDTO.workHours());
        worker.setAbleToWorkIndependently(workerDTO.ableToWorkIndependently());
        employeeRepositoryRepository.save(worker);
        return workerDTO;
    }

}
