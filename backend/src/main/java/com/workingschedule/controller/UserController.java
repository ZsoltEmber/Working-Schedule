package com.workingschedule.controller;

import com.workingschedule.model.AppUser;
import com.workingschedule.model.payload.RegisterUserRequest;
import com.workingschedule.repository.UserRepository;
import com.workingschedule.security.jwt.JwtUtils;
import com.workingschedule.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserRepository userRepository;
    private final JwtUtils jwtUtils;
    private UserService userService;

    @Autowired
    public UserController(UserRepository userRepository, JwtUtils jwtUtils, UserService userService) {
        this.userRepository = userRepository;
        this.jwtUtils = jwtUtils;
        this.userService = userService;
    }


    @PostMapping("/register")
    AppUser registerUser (@RequestBody RegisterUserRequest registerUserRequest){
        return userService.registerUser(registerUserRequest);
    }

    //CREATE
//    @PostMapping("/register")
//    public User registerUser(@RequestBody RegisterUserRequest registerUserRequest) {
//    }

//    @PostMapping("/login")
//    public JwtResponse authenticateUser(@RequestBody LoginRequest loginRequest) {
//        Authentication authentication = authenticationManager
//                .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.name(), loginRequest.password()));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        String jwt = jwtUtils.generateToken(authentication);
//        org.springframework.security.core.userdetails.User userDetails = (org.springframework.security.core.userdetails.User) authentication.getPrincipal();
//        List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority)
//                .toList();
//
//        return new JwtResponse(jwt, userDetails.getUsername(), roles);
//
//    }

}
