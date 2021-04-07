import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  postTypeRequest(url, payload): any {
    return this.http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }
}
