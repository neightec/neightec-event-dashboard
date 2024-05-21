package com.neightec.neightecavserver.models.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GuestDTO {
    private String name;
    private String status; //TODO enum
    private String date; //TODO change to date
}
