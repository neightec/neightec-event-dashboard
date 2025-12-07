package com.neightec.neightecavserver.auth;

import com.neightec.neightecavserver.config.AuthConfig;
import com.neightec.neightecavserver.models.neightec_data.NeightecUser;
import com.neightec.neightecavserver.services.NeightecUserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.security.Principal;
import java.util.logging.Level;

@Service
@Log4j2
public class NeightecAuthFilter extends OncePerRequestFilter {

    @Autowired
    NeightecUserService neightecUserService;

    @Override
    public void doFilterInternal(HttpServletRequest request,
                                 HttpServletResponse response,
                                 FilterChain filterChain) throws ServletException, IOException {

        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            if (authentication != null) {
                filterChain.doFilter(request, response);
            } else {
                if (request.getUserPrincipal() != null) {
                    String username = request.getUserPrincipal().getName();
                    log.info("username {}", username);

                    try {
                        NeightecUser user = this.neightecUserService.setNewUser(username);
                        SecurityContextHolder.getContext().setAuthentication(user);
                    } catch(Exception exception) {
                        log.error("error processing request", exception);
                    }
                }
            }
        } finally {
            filterChain.doFilter(request, response);
            log.info("NeightecAuthFilter finally filtered!");
        }
    }
}
