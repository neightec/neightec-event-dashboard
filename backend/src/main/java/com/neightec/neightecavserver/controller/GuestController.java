package com.neightec.neightecavserver.controller;

import com.neightec.neightecavserver.models.dto.GuestDTO;
import com.neightec.neightecavserver.models.enums.GuestAttendanceEnum;
import com.neightec.neightecavserver.services.FileTypesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.hibernate.annotations.Parameter;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/guest")
@Log4j2
@RequiredArgsConstructor
public class GuestController {

    /**
     * unlikely to use for MVP, just to prepare
     * @param uuid
     * @return
     */
    @GetMapping(
            value = {"/"},
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GuestDTO> getGuestWeddingDashboard(
            @RequestParam(name = "uuid") UUID uuid) {
        log.info("get Wedding");
        GuestDTO dto = new GuestDTO("Test", GuestAttendanceEnum.ABSENT, LocalDate.of(2020, 1, 8));
        return ResponseEntity.ok(dto);
    }

    /**
     * TODO get via Repository
     * REST get to fetch list of guests from specific user
     * @return list of guestWedding
     */
    @GetMapping(value = "/get-dashboard-list", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<List<GuestDTO>> getGuestDashboardList(@RequestParam(name = "uuid") UUID uuid) {
    public ResponseEntity<List<GuestDTO>> getGuestDashboardList() {
        log.info("/get-dashboard-list called");
        List<GuestDTO> dtos = new ArrayList<>();
        for (int idx = 0; idx < 31; idx++) {
            if (idx % 2 == 0) {
                dtos.add(new GuestDTO("Test-" + idx, GuestAttendanceEnum.ATTENDING, LocalDate.of(2020, 1, 8)));
            } else {
                dtos.add(new GuestDTO("Test-" + idx, GuestAttendanceEnum.ABSENT, LocalDate.of(2020, 1, 8)));
            }
        }

        if (!dtos.isEmpty()) {
            return ResponseEntity.ok(dtos);
        }
        return ResponseEntity.ok(Collections.emptyList());
    }

    /**
     * REST post to upload list of guests from specific user
     * @param name from user
     * @param file uploaded file from user
     * @return list of guestWedding
     */
    @PostMapping(value = "/add-list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<GuestDTO>> addGuestDashboardList(@RequestParam ("name") String name,
                                                                @RequestParam("file") MultipartFile file) {
        log.info("Add list for Guest Wedding Dashboard from File");
        return null;
    }


}
