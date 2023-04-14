import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection, getDocs, setDoc, doc, query, where, DocumentData, QueryFieldFilterConstraint } from '@angular/fire/firestore';
import { IItem, Type } from '../interfaces/item';
import { DatabaseService } from './database.service';
import itemJson from '../../assets/data/items.json';



@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  collectionName = 'Items';

  count : number = 0;

  constructor(private firestore: Firestore, private dbService : DatabaseService) { 
    
    this.getFoodItems();
    //this.getPlantsAndPetsItems();
    //this.getAllItems();
    //this.getItems();
    
  }

  async getItems(filter : QueryFieldFilterConstraint | null = null) {
    const itemsRef = collection(this.firestore, this.collectionName);
    let q = query(itemsRef, filter);
    return await getDocs(q);
  }

  async getAllItems(){
    await this.getItems()
    .then(response=>
      response.forEach(doc=>{
        console.log(doc.data())
      }))
  }

  async getFoodItems(){
    let filter : QueryFieldFilterConstraint = where('Type', '==', Type.food);

    return this.getItems(filter).then(
      response=>response.docChanges().map(d=>{
        const i = d.doc.data() as IItem;
        return i;
      })
    );
  }

  // async getPlantsAndPetsItems(){
  //   let filter : QueryFieldFilterConstraint = where('Type', '==', Type.plantsAndAnimals);

  //   await this.getItems(filter)
  //   .then(response=>
  //     response.forEach(doc=>{
  //       console.log(doc.data())
  //     }))
  // }

  async addItem(newItem : IItem){
    const itemsRef = collection(this.firestore, this.collectionName);
    await setDoc(doc(itemsRef), newItem);
  }

  // async seedData() {
  //   if(this.count == 0){
      
  //     let items : IItem[];
      
  //     await this.dbService.getData().toPromise().then(
  //       data=>{
  //         items = data.items;}
  //     )

  //     const itemsRef = collection(this.firestore, "Items");

  //     for (const item of items) {
  //       await setDoc(doc(itemsRef), {
  //         ItemId: item.ItemId,
  //         Title: item.Title,
  //         Description: item.Description,
  //         Image: item.Image,
  //         CreatedDate: item.CreatedDate,
  //         Type: item.Type,
  //         FilterTag: item.FilterTag,
  //         Address: item.Address,
  //         UserId: item.UserId,
  //         Price: item.Price
  //       })
  //     }
  // }}

  // read_Items(): Observable<any[]> {
  //   return this.firestore.collection(this.collectionName).snapshotChanges();
  // }

  /*
  create_Item(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }
  update_student(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_student(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }*/
}
