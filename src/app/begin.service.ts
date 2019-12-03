import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ServerLessResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class BeginService {
  constructor(private http: HttpClient) {}

  /**
   * Makes a GET request to the `/hello` hello serverless function and
   * returns the response
   */
  public fetchDataFromServerless(): Observable<ServerLessResponse> {
    return this.http.get<ServerLessResponse>('/hello');
  }
}
