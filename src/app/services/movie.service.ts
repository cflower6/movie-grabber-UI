import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = 'http://localhost:8080/ping'
  constructor(private http: HttpClient) { }

  getMovie(title: string | null): Observable<any> {
    return this.http.get(this.baseUrl, {headers: {
       'Content-Type': 'application/json',
        'Accept': 'application/json',
      }});
  }
}
