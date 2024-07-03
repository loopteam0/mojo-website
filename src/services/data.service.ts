import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  renderPage(pageType: string): Observable<any> {
    const params = new HttpParams().set('pageType', pageType);

    return this.http.get(`${this.apiUrl}/pages/page-detail`, { params });
  }
}
