package com.workingschedule.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "worker_seq_gen")
    @SequenceGenerator(name = "worker_seq_gen", sequenceName = "worker_seq", initialValue = 1, allocationSize = 1)
    private long id;
    private String name;
    private short monthlyRequiredWorkingHours;
    private boolean ableToWorkIndependently;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="app_user_id", referencedColumnName = "id")
    @JsonIgnore
    private AppUser user;
}
