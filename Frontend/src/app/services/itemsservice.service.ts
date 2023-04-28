import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IItem } from '../interfaces/item';
import { map, Observable, catchError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemsserviceService {

  baseUrl : string = environment.apiBaseUrl + '/items'

  constructor(private http : HttpClient) { }

  getFoodItems() : Observable<IItem[]> {
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

  getResourceItems() : Observable<IItem[]> {
    return this.http.get<any[]>(this.baseUrl + '/resources')
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

  getPetsAndPlantsItems() : Observable<IItem[]> {
    return this.http.get<any[]>(this.baseUrl + '/petsplants')
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

  getAllItems() : Observable<IItem[]> {
    return this.http.get<any[]>(this.baseUrl)
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

  getItemsByUserId(userId : number) : Observable<IItem[]> {
    return this.http.get<any[]>(this.baseUrl + '/user/' + userId)
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

  createNewItem(newItem : IItem){
    const item = {
      title: newItem.Title,
      description: newItem.Description,
      image: newItem.Image,
      type: newItem.Type,
      filterTag: newItem.FilterTag,
      address: newItem.Address,
      userId: newItem.UserId,
      price: newItem.Price
    }

    return this.http.post<IItem>(this.baseUrl, item);
  }
}
