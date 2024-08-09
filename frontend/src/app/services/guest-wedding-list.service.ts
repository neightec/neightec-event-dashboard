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
      return this.http.get<GuestDTO[]>(url, {headers: httpHeaders});
    } catch (e) {
      throw e;
    }
  }

  public enterGuestToWeddingListManual(guests: string[]): Observable<GuestDTO[]> {
    try {
      const url = `${this.apiEndpoint}guest/add-list-manual`;
      const body = JSON.stringify(guests);
      const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.post<GuestDTO[]>(url, body, {headers: httpHeaders});
    } catch (e) {
      throw e;
    }
  }

}
