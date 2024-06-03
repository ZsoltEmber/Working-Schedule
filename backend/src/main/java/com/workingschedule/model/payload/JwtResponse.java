package com.workingschedule.model.payload;

import java.util.List;

public record JwtResponse(String jwt, String userName, List<String> roles) {
}
