import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  clearMessage(message: string){
    // // index de mon message ?
    // const index = this.messages.indexOf(message);
    // // if si l'index est bien dans le tableau de messages
    // if(index !== -1){
    //   // si il est bien dedant alors splice de mon tableau
    //   this.messages.splice(index, 1)
    // }
    // this.messages = this.messages.filter(m => m!==message);
    
    const index = this.messages.findIndex(m => m === message);
    if(index !== -1){
      this.messages.splice(index, 1)
    }

  }
}
