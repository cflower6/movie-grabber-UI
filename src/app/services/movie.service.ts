import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  getMovie(title: string, id: string): Observable<any> {
    const movieUrl = '/api/movie';
    return this.http.get(movieUrl, {
      params: new HttpParams().append('t', title).append('i', id),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getMovies(search: string): Observable<any> {
    const moviesUrl = '/api/movies';
    return this.http.get(moviesUrl, {
      params: new HttpParams().append('s', search),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
/**
 * */
