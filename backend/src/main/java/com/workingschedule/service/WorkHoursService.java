package com.workingschedule.service;

import com.workingschedule.model.WorkHours;
import com.workingschedule.model.dto.WorkHoursDTO;
import com.workingschedule.repository.WorkHoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkHoursService {
    private final WorkHoursRepository workHoursRepository;

    @Autowired
    public WorkHoursService(WorkHoursRepository workHoursRepository) {
        this.workHoursRepository = workHoursRepository;
    }

    public WorkHoursDTO addWorkHours(WorkHoursDTO workHoursDTO) {
        WorkHours workHours = new WorkHours();
        workHours.setName(workHoursDTO.name());
        workHours.setNumberOfHoursPerDayOff(workHoursDTO.numberOfHoursPerDayOff());
        workHours.setMonthlyHours(workHoursDTO.monthlyHours());
        workHoursRepository.save(workHours);
        return workHoursDTO;
    }

    public List<WorkHours> getAllWorkHours() {
        return workHoursRepository.findAll();
    }

    public WorkHours deleteWorkHoursById(long id) {
        WorkHours workHours = workHoursRepository.findById(id);
        workHoursRepository.delete(workHours);
        return workHours;
    }

    public WorkHoursDTO editWorkHours(long id, WorkHoursDTO workHoursDTO){
        WorkHours workHours = workHoursRepository.findById(id);
        workHours.setName(workHoursDTO.name());
        workHours.setNumberOfHoursPerDayOff(workHoursDTO.numberOfHoursPerDayOff());
        workHours.setMonthlyHours(workHoursDTO.monthlyHours());
        workHoursRepository.save(workHours);
        return workHoursDTO;
    }


}
