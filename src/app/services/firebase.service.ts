import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { database } from '../shared/shared.module'

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  collectionName = 'Items';

  constructor(private firestore: AngularFirestore) { }


  read_Items(): Observable<any[]> {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

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
