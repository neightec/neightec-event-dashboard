package com.neightec.neightecavserver.services;

import com.neightec.neightecavserver.config.NeightecFilePathsConfig;
import com.neightec.neightecavserver.models.dto.GuestDTO;
import com.neightec.neightecavserver.models.enums.GuestAttendanceEnum;
import com.neightec.neightecavserver.models.neightec_data.FileSignature;
import com.neightec.neightecavserver.models.neightec_data.Guest;
import com.neightec.neightecavserver.repositories.FileSignatureRepository;
import com.neightec.neightecavserver.repositories.GuestRepository;
import com.neightec.neightecavserver.services.mapper.GuestMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.poi.ss.usermodel.*;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ResourceUtils;

import java.io.*;
import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Guest Service
 * @author natanielsusantoputra
 */
@Service
@RequiredArgsConstructor
@Log4j2
public class GuestService {

    private static final String COMMA_DELIMITER = ";";
    private final GuestRepository guestRepository;
    private final GuestMapper guestMapper;

    public List<GuestDTO> addGuests(List<String> guests) {
        if (!guests.isEmpty()) {
            List<GuestDTO> guestDTOS = new ArrayList<>();
            guests.forEach(name -> {
                Guest guest = new Guest();
                guest.setFullName(name);
                guest.setValidStart(Instant.now());
                guest.setAttendanceStatus(GuestAttendanceEnum.ATTENDING.getName());
                guestRepository.save(guest);
                guestDTOS.add(guestMapper.toDTO(guest));
            });
            return guestDTOS;
        }
        return Collections.emptyList();
    }

    public List<GuestDTO> getAllGuests() {
        return guestRepository.findAll().stream().map(guestMapper::toDTO).toList();
    }

}
