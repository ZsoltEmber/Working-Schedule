package com.workingschedule.service;

import com.workingschedule.controller.dto.WorkerDTO;
import com.workingschedule.model.Worker;
import com.workingschedule.repository.WorkerRepository;
import org.springframework.stereotype.Service;

@Service
public class WorkerService {
    private final WorkerRepository workerRepository;

    public WorkerService(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    public WorkerDTO addWorker(WorkerDTO workerDTO){
        Worker worker = new Worker();
        worker.setName(workerDTO.name());
        worker.setMonthlyRequiredWorkingHours(workerDTO.workHours());
        worker.setAbleToWorkIndependently(workerDTO.ableToWorkIndependently());
        workerRepository.save(worker);
        return workerDTO;
    }

}
