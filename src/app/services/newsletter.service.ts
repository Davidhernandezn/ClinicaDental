import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) { }

  subscribeToNewsletter(firstName: string, email: string) {
    const formData = { firstName, email };
    const headers = new HttpHeaders()
      .set('ordProyecto', 'a6093c23ae10457c8t0b8b298fc8b500')
      .set('ordCandidato', '0edd9df1f114457ba7a70636bd117316');
    return this.http.post('https://repoapi.ordenaris.com/api/newsletter', formData, { headers });
  }
}
