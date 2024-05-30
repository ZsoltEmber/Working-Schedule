package com.workingschedule.model;



import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class WorkShift {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "worker_seq_gen")
    @SequenceGenerator(name = "worker_seq_gen", sequenceName = "worker_seq", initialValue = 1, allocationSize = 1)
    private long id;
    private LocalDate date;
    private Shift shift;
    //TODO: SET UP RELATIONS
    private List<Worker> workers;
}
