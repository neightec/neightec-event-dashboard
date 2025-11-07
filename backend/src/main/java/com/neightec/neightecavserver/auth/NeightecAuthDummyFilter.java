package com.neightec.neightecavserver.auth;

import com.neightec.neightecavserver.config.AuthConfig;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.security.Principal;

    public class NeightecAuthDummyFilter extends OncePerRequestFilter {

        private AuthConfig authConfig;

        public NeightecAuthDummyFilter(AuthConfig authConfig) {
            this.authConfig = authConfig;
        }

        @Override
        public void doFilterInternal(HttpServletRequest request,
                                     HttpServletResponse response,
                                     FilterChain filterChain) throws ServletException, IOException {

            HttpServletRequestWrapper wrapper;

            if (!this.authConfig.getDummyUser().isEmpty()) {
                wrapper = getWrapper(request, authConfig.getDummyUser());
            } else {
                String username = "test";
                wrapper = getWrapper(request, username);
            }

            if(wrapper != null) {
                filterChain.doFilter(wrapper, response);
            } else {
                filterChain.doFilter(request, response);
            }

        }

        private HttpServletRequestWrapper getWrapper(HttpServletRequest request, String username) {
            return new HttpServletRequestWrapper(request) {
                @Override
                public Principal getUserPrincipal() {
                    return () -> username;
                }
            };
        }
    }
