package com.workingschedule.repository;

import com.workingschedule.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface workerRepository extends JpaRepository<Worker, Long> {
}
