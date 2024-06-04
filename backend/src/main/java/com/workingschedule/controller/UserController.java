package com.workingschedule.controller;

import com.workingschedule.model.AppUser;
import com.workingschedule.model.payload.JwtResponse;
import com.workingschedule.model.payload.LoginRequest;
import com.workingschedule.model.payload.RegisterUserRequest;
import com.workingschedule.security.Role;
import com.workingschedule.security.jwt.JwtUtils;
import com.workingschedule.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final JwtUtils jwtUtils;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;


    @Autowired
    public UserController(JwtUtils jwtUtils, UserService userService, AuthenticationManager authenticationManager) {
        this.jwtUtils = jwtUtils;
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }


    //CREATE
    @PostMapping("/register")
    AppUser registerUser(@RequestBody RegisterUserRequest registerUserRequest) {
        return userService.registerUser(registerUserRequest);
    }


    @PostMapping("/login")
    public ResponseEntity<JwtResponse> logIn(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.username(), loginRequest.password()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateToken(authentication);
        System.out.println(jwt);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();

        for (GrantedAuthority authority : authorities) {
            if (authority.getAuthority().equals(Role.ROLE_USER.name())) {
                return ResponseEntity
                        .ok(new JwtResponse(jwt, userDetails.getUsername(), List.of(Role.ROLE_USER)));
            }
        }

        throw new EntityNotFoundException("User not found.");
    }
}
