import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, customUrl: string) {
    this.url = `${this.baseUrl}/${customUrl}`;
  }

  getResources(): Observable<any> {
    return this.http.get(this.url);
  }

  createResource(resource): Observable<any> {
    return this.http.post(this.url, resource);
  }
}
