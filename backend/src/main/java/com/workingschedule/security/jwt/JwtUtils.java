package com.workingschedule.security.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtils {
    private static final Logger logger = LoggerFactory.getLogger((JwtUtils.class));
    @Value("${codecool.app.jwtSecret}")
    private String jwtSecret;
    @Value("${codecool.app.jwtExpirationMs}")
    private int jwtExpirationMS;


    public String generateToken(Authentication authentication){
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return Jwts.builder()
                .setSubject((userDetails.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date().getTime() + jwtExpirationMS)))
                .signWith(key(), SignatureAlgorithm.HS256)
                .compact();

    }

    private Key key(){
        return  Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

    public String getUserNameFromToken(String token){
        return Jwts.parserBuilder().setSigningKey(key()).build().parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String authToken){
        try{
            Jwts.parserBuilder().setSigningKey(key()).build().parse(authToken);
            return true;
        }catch (MalformedJwtException exception){
            logger.error("INVALID JWT TOKEN: {}", exception.getMessage());
        } catch (ExpiredJwtException e) {
            logger.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }
        return false;
    }
}
