package com.neightec.neightecavserver.services

import org.spockframework.spring.SpringBean
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.mock.web.MockMultipartFile
import spock.lang.Specification

@SpringBootTest(classes = FileStorageService)
class FileStorageServiceSpec extends Specification {

    @SpringBean
    FileStorageService fileStorageService

    def setup() {
        fileStorageService = new FileStorageService()
    }

    def "upload file throws false when file is null"() {
        given:
        def file = null

        when:
        def result = fileStorageService.uploadFile(file)

        then:
        result == false
    }

    // TODO upload file ist eher integration test, kein unit-test
    def "upload file throws true when file is not null"() {
        given:
        def fileContainer = "Test Content".getBytes()
        def file = new MockMultipartFile(
                "testFile",
                "test-file.csv",
                "text/csv", // adjust content Type to have multiple content type
                fileContainer
        )

        when:
        def result = fileStorageService.uploadFile(file)

        then:
        result == true
    }
}
