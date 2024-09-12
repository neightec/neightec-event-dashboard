package com.neightec.neightecavserver.services;

import com.neightec.neightecavserver.config.NeightecFilePathsConfig;
import com.neightec.neightecavserver.models.neightec_data.FileSignature;
import com.neightec.neightecavserver.repositories.FileSignatureRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.poi.ss.usermodel.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * general service to extract objects from file storage file
 * @author natanielsusantoputra
 */
@Service
@RequiredArgsConstructor
@Log4j2
public class FileStorageService {

    public Boolean uploadFile(MultipartFile file) {
        if (file != null) {
            log.info("upload file called: {}", file.getOriginalFilename());
            return true;
        }
        return false;
    }
}
