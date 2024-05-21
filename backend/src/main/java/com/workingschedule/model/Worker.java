package com.workingschedule.model;

import jakarta.persistence.*;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "worker_seq_gen")
    @SequenceGenerator(name = "worker_seq_gen", sequenceName = "worker_seq", initialValue = 1, allocationSize = 1)
    private long id;
    private String name;
    private short monthlyRequiredWorkingHours;

    private boolean ableToWorkIndependently;


}
