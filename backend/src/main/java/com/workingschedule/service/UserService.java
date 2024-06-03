package com.workingschedule.service;

import com.workingschedule.model.AppUser;
import com.workingschedule.model.payload.RegisterUserRequest;
import com.workingschedule.repository.UserRepository;
import com.workingschedule.security.Role;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }


    private void addRoleFor(String username, Role role) {
        AppUser user = userRepository.findByUsername(username).orElseThrow(() -> new EntityNotFoundException("User not found"));
        user.getRoles().add(role);
        userRepository.save(user);
    }

    public AppUser registerUser (RegisterUserRequest registerUserRequest){
        AppUser user = new AppUser();
        user.setUsername(registerUserRequest.username());
        user.setPassword(encoder.encode(registerUserRequest.password()));
        user.setRoles(Set.of(Role.ROLE_USER));
        return userRepository.save(user);
    }


}
