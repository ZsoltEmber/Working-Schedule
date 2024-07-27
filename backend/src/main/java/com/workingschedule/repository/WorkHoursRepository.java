package com.workingschedule.repository;


import com.workingschedule.model.WorkHours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkHoursRepository extends JpaRepository<WorkHours, Long> {

    @Override
    List<WorkHours> findAll();

    WorkHours findById(long id);
}
