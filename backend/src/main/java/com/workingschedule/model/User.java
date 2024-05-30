package com.workingschedule.model;

import com.workingschedule.security.Role;
import jakarta.persistence.*;
import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "client_seq_gen")
    @SequenceGenerator(name = "client_seq_gen", sequenceName = "client_seq", initialValue = 1, allocationSize = 1)
    private long id;
    @Column(unique = true)
    private String username;
    private String password;
    private Role role;
}
