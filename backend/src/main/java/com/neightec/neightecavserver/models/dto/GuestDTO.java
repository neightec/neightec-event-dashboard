package com.neightec.neightecavserver.models.dto;

import com.neightec.neightecavserver.models.enums.GuestAttendanceEnum;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class GuestDTO {
    private String name;
    private GuestAttendanceEnum guestAttendanceEnum;
    private LocalDate date;
}
