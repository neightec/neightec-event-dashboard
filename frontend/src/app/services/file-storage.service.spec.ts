import {HttpErrorResponse} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {FileStorageService} from './file-storage.service';
import {DocumentDTO} from '../dto/documentDTO';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

const campaignId = '1';
const status = 500;
const statusText = 'Internal Server Error';
const errorEvent = new ProgressEvent('API error');

describe('FileStorageService', () => {
  let service: FileStorageService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FileStorageService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    service = TestBed.inject(FileStorageService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
