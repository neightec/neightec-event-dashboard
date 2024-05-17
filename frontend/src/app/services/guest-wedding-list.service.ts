import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { NeightApiService } from 'src/neight-api.service';
import { mockGuests } from '../mock-data/mock-data.helper';

@Injectable({
  providedIn: 'root'
})
export class GuestWeddingListService {

  public controller_path: string = "guest_wedding_list";

  constructor(protected injector: Injector,
    protected neightApi: NeightApiService,
    protected http: HttpClient) {
}

  public fetchWeddingList(): any {
    // let url: string = this.neightApi.getBackendUrl() + this.controller_path;
    // const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // const response: any = this.http.get(url, {headers: httpHeaders});
    const response: any = mockGuests;

    return response;
  }
}
