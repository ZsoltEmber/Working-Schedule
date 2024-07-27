package com.workingschedule.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "employee_seq_gen")
    @SequenceGenerator(name = "employee_seq_gen", sequenceName = "employee_seq", initialValue = 1, allocationSize = 1)
    private long id;

    private String name;
    private boolean ableToWorkIndependently;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "app_user_id", referencedColumnName = "id")
    @JsonIgnore
    private AppUser user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "work_hours", referencedColumnName = "id")
    @JsonIgnore
    private WorkHours workHours;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "work_shifts",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "work_shift_id")
    )
    private List<WorkShift> workShifts;


}
