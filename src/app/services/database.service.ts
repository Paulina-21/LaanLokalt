import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import itemJson from './../data/items.json';
import { IItem } from '../interfaces/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) { }
  
  /*
  readJsonFile() {
    return this.http.get<IItem[]>('/data/items.json'); 
  }*/
  getData(): Observable<any> {
    return this.http.get<any>('./data/items.json');
  }
}
