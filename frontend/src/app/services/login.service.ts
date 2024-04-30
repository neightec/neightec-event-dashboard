import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NeightApiService } from 'src/neight-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    public controller_path: string = "auth_login";

    constructor(protected injector: Injector,
        protected neightApi: NeightApiService,
        protected http: HttpClient) {
    }

    public async authUser(username: string): Promise<boolean> {
        let url: string = this.neightApi.getBackendUrl() + this.controller_path;
        const httpParams = new HttpParams().set('username', username.toString());
        const response: any = await this.http.get(url,  { params: httpParams }).toPromise();
        return response;
    }
}
