package com.neightec.neightecavserver.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Data
@AllArgsConstructor
@Getter
@Setter
public class NeightecUserDTO {
    private String firstName;
    private String lastName;
    private Instant creationDate;
    private Instant validStart;
    private Instant validEnd;
}
