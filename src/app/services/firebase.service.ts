import { Injectable } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection, getDocs } from '@angular/fire/firestore';
import { IItem } from '../interfaces/item';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  collectionName = 'Items';

  constructor(private firestore: Firestore) { 
    this.getItems();
  }

  async getItems() {
    
    // const itemCollection = collection(this.firestore, this.collectionName);
    
    // getDocs(itemCollection)
    
    const querySnapshot = await getDocs(collection(this.firestore, "Items"))
    .then(response=>response.forEach(doc=>{
      console.log(doc.data())
    }));
  }

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
