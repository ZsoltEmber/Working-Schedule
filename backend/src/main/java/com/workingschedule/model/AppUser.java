package com.workingschedule.model;

import com.workingschedule.security.Role;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq_gen")
    @SequenceGenerator(name = "user_seq_gen", sequenceName = "user_seq", initialValue = 1, allocationSize = 1)
    private long id;
    @Column(unique = true)
    private String username;
    private String password;
    Set<Role> roles;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    Set<Employee> employees;
}
