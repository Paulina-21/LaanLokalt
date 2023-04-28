import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IItem } from '../interfaces/item';
import { map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemsserviceService {

  baseUrl : string = environment.apiBaseUrl + '/items'

  constructor(private http : HttpClient) { }

  getFoodItems() {
    return this.http.get<any[]>(this.baseUrl + '/food')
    .pipe(
      map(response=>{
        return response.map(i=>( {
          ItemId: i.id,
          Title: i.title,
          Description: i.description,
          Image: i.image,
          CreatedDate: i.createdAt,
          Type: i.itemType,
          FilterTag: i.filterTag,
          Address: i.address,
          UserId: i.userId,
          Price: i.price
        } as IItem)) 
      })
    );
  }
}
