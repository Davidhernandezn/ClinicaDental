import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDoctoresService {

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    const headers = new HttpHeaders()
      .set('ordProyecto', 'a6093c23ae10457c8t0b8b298fc8b500')
      .set('ordCandidato', '0edd9df1f114457ba7a70636bd117316');

    return this.http.get('https://repoapi.ordenaris.com/api/listaDoctores', { headers });
  }
}
