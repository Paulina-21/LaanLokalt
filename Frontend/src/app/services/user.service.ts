import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { map, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = environment.apiBaseUrl + '/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<any>(this.baseUrl);
  }
}
