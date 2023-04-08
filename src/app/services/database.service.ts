import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import itemJson from '../../assets/data/items.json';
import { IItem,Type } from '../interfaces/item';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private readonly url = '/assets/data/items.json';
  itemList: IItem[];

  constructor(private http: HttpClient) {  }

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getPlantsAndAnimals() {
    return this.http.get<any>(this.url)
      .pipe(
        map(response=>{return response.items}),
        map((items : IItem[])=>items.filter(item=>item.Type == Type.plantsAndAnimals))
      )
  }
}
