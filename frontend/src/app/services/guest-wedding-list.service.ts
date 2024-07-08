import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, lastValueFrom, map } from 'rxjs';
import { NeightApiService } from 'src/neight-api.service';
import { mockGuests } from '../mock-data/mock-data.helper';
import { neightEnvironment } from 'src/environments/environment';
import { GuestDTO } from '../dto/GuestDTO';

@Injectable({
  providedIn: 'root'
})
export class GuestWeddingListService {

  apiEndpoint: string;
  public path: string = "guest";

  constructor(protected injector: Injector,
    protected neightApi: NeightApiService,
    protected http: HttpClient) {
      this.apiEndpoint = `${neightEnvironment.api_url}`;
}


  public fetchWeddingDashboardList(): Observable<GuestDTO[]> {
    try {
      const url = `${this.apiEndpoint}guest/get-dashboard-list`;
      const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
      return this.http.get<any>(url, {headers: httpHeaders});
    } catch (e) {
      throw e;
    }
  }


  public fetchWeddingList(): any {
    // let url: string = this.neightApi.getBackendUrl() + this.controller_path;
    // const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    // const response: any = this.http.get(url, {headers: httpHeaders});
    const response: any = mockGuests;

    return response;
  }
}
