import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import itemJson from '../../assets/data/items.json';
import { IItem, Type } from '../interfaces/item';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private readonly url = '/assets/data/items.json';
  itemList: IItem[];

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  updateData(data: any): Observable<any> {
    return this.http.put<any>(this.url, data);
  }

  createItem(item: any): Observable<any> {
    return this.http.post<any>(this.url, item);
  }

  updateItem(item: any): Observable<any> {
    return this.http.put<any>(this.url, item);
  }

  deleteItem(id: string): Observable<any> {
    return this.getData().pipe(
      map((data) => {
        data.items = data.items.filter((item) => item.id !== id);
        return data;
      }),
      switchMap((data) => this.updateData(data))
    );
  }

  getPlantsAndAnimals() {
    return this.http.get<any>(this.url).pipe(
      map((response) => {
        return response.items;
      }),
      map((items: IItem[]) =>
        items.filter((item) => item.Type == Type.plantsAndAnimals)
      )
    );
  }


  getresources(){
    return this.http.get<any>(this.url).pipe(
      map((response) => {
        return response.items;
      }),
      map((items: IItem[]) =>
      items.filter((item) => item.Type == Type.resources)
      )
    );

  }

  getAllItemsForUser(userId : number) {

    return this.http.get<any>(this.url)
      .pipe(
        map(response => { return response.items }),
        map((items: IItem[]) => items.filter(item => item.UserId == userId))
      )
  }
}
