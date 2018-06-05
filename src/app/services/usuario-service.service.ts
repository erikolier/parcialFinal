import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
export interface Usuario{id:string,nick:string,pass:string,rumbaCoin:number;}
@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private itemsCollection: AngularFirestoreCollection<Usuario>;
  Usuario: Observable<Usuario[]>;
  private itemDoc: AngularFirestoreDocument<Usuario>;
  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Usuario>('Usuario');
    this.Usuario = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  ListaUsuario(){
    return this.Usuario;
  }
  agregarUsuario(usuario: Usuario){
    this.itemsCollection.add(usuario);
  }
  editarUsuario(usuario){
    this.itemDoc=this.afs.doc<Usuario>(`Usuario/${usuario.id}`);
    this.itemDoc.update(usuario);
  }
  suma(num1,num2){
    let i=Number(num1);
    let o=Number(num2);
    return i+o;
  }
  resta(num1,num2){
    let i=Number(num1);
    let o=Number(num2);
    return i-o;
  }
}
