import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Envoi } from '../models/envoi';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private path='/BASE'
  mess: AngularFirestoreCollection<Envoi>;

  constructor(public afs:AngularFirestore){
    this.mess= afs.collection(this.path);
  }

  add(env:Envoi):void
  {
    this.mess.add({...env})
  }
}
