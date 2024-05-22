package com.workingschedule.repository;

import com.workingschedule.model.Worker;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface WorkerRepository extends JpaRepository<Worker, Long> {

    @Override
    List<Worker> findAll();
}
