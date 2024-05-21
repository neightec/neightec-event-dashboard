package com.neightec.neightecavserver.controller;

import com.neightec.neightecavserver.models.dto.GuestDTO;
import com.neightec.neightecavserver.services.FileTypesService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GuestDTO> getGuestWeddingDashboard(UUID uuid) {
        log.info("get Wedding");
        GuestDTO dto = new GuestDTO("Test", "test", "01.01.2024");
        return ResponseEntity.ok(dto);
    }

    /**
     * REST get to fetch list of guests from specific user
     * @param uuid from user
     * @return list of guestWedding
     */
    @GetMapping(value = "/get-dashboard-list", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<GuestDTO>> getGuestDashboardList(UUID uuid) {
        log.info("get-all file-types called");
        return null;
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
