package com.workingschedule.service;

import com.workingschedule.model.Employee;
import com.workingschedule.model.dto.EmployeeDTO;
import com.workingschedule.repository.EmployeeRepository;
import com.workingschedule.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;


@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final UserRepository userRepository;

    @Autowired

    public EmployeeService(EmployeeRepository workerRepository, UserRepository userRepository) {
        this.employeeRepository = workerRepository;
        this.userRepository = userRepository;
    }

    public EmployeeDTO addEmployee(EmployeeDTO workerDTO, String username) {
        Employee worker = new Employee();
        worker.setName(workerDTO.name());
        worker.setMonthlyRequiredWorkingHours(workerDTO.monthlyRequiredWorkingHours());
        worker.setAbleToWorkIndependently(workerDTO.ableToWorkIndependently());
        //TODO: DELETE SOUT
        System.out.println("USERNAME: " + username);
        worker.setUser(userRepository.findByUsername(username).orElseThrow(NoSuchElementException::new));
        employeeRepository.save(worker);
        return workerDTO;
    }

    public List<Employee> getEmployeesByUser(String username) {
        return employeeRepository.findAllByUser_Username(username);
    }


    public Employee getEmployeeById(long id) {
        return employeeRepository.findById(id);
    }


    public Employee editEmployee(long id, EmployeeDTO employeeDTO){
        Employee employee = employeeRepository.findById(id);
        employee.setName(employeeDTO.name());
        employee.setAbleToWorkIndependently(employeeDTO.ableToWorkIndependently());
        employee.setMonthlyRequiredWorkingHours(employeeDTO.monthlyRequiredWorkingHours());
        return employeeRepository.save(employee);
    }

}
