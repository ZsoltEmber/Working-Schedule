package com.workingschedule.model.payload;

import com.workingschedule.security.Role;

import java.util.List;

public record JwtResponse(String jwt, String userName, List<Role> roles) {
}
