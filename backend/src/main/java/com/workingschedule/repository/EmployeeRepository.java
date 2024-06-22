package com.workingschedule.repository;

import com.workingschedule.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findAllByUser_Username(String username);
    Employee findById(long id);
}



