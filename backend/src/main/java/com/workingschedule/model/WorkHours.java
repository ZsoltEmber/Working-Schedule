package com.workingschedule.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class WorkHours {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "work_hours_seq_gen")
    @SequenceGenerator(name = "work_hours_seq_gen", sequenceName = "work_hours_seq", initialValue = 1, allocationSize = 1)
    private long id;
    String name;
    double monthlyHours;
    double numberOfHoursPerDayOff;
    @OneToMany(mappedBy = "workHours", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    List<Employee> employees;

}
