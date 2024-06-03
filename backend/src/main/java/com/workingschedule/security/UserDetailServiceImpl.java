package com.workingschedule.security;

import com.workingschedule.model.AppUser;
import com.workingschedule.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    private final UserRepository userRepository;
    @Autowired
    public UserDetailServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<AppUser> targetUser = userRepository.findByUsername(username);

        if(targetUser.isPresent()){
            List<SimpleGrantedAuthority> roles = new ArrayList<>();
            for( Role role : targetUser.get().getRoles()){
                roles.add(new SimpleGrantedAuthority(role.name()));
            }
        return new org.springframework.security.core.userdetails.User(targetUser.get().getUsername(), targetUser.get().getPassword(), roles);
        }else {
            throw new UsernameNotFoundException(username + " not found");
        }
    }
}
