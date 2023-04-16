import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, getDocs, setDoc, doc, query, where, DocumentData, QueryFieldFilterConstraint } from '@angular/fire/firestore';
import { IItem, Type } from '../interfaces/item';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  collectionName = 'Items';

  constructor(private firestore: Firestore) {
  }

  async getItems(filter: QueryFieldFilterConstraint | null = null) {
    const itemsRef = collection(this.firestore, this.collectionName);
    let q = query(itemsRef, filter);
    console.log((itemsRef));

    return await getDocs(q).then(
      response => response.docChanges().map(d => {
        const i = d.doc.data() as IItem;
        return i;
      })
    );
  }

  async getFoodItems() {
    let filter: QueryFieldFilterConstraint = where('Type', '==', Type.food);
    return this.getItems(filter);
  }

  async getResourceItems() {
    let filter: QueryFieldFilterConstraint = where('Type', '==', Type.resources);
    return this.getItems(filter);
  }

  async getPlantsAndAnimalsItems() {
    let filter: QueryFieldFilterConstraint = where('Type', '==', Type.plantsAndAnimals);
    return this.getItems(filter);
  }

  async addItem(newItem: IItem) {
    const itemsRef = collection(this.firestore, this.collectionName);
    await setDoc(doc(itemsRef), newItem);
  }

}
