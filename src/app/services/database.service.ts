import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import itemJson from './../data/items.json';
import { IItem } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http: HttpClient) { }
  readJsonFile() {
    return this.http.get<IItem[]>('/data/items.json');
  }
}
