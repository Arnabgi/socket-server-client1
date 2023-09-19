import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io,Socket } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  private socket: Socket;
  constructor() { 
    this.socket = io('http://localhost:3000');
  }

  joinRoom(room: string) {
    this.socket.emit('join', room);
  }

  //  sendMessage(room: string,message: any) {
  sendMessage(message: any) {
   // this.socket.emit('message', {room, message});
    this.socket.emit('message', {message});
  }

  getNewMessage(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('message', (message: string) => {
        observer.next(message);
      });
    });
  }

  //  getNewMessage = () => {
  //   this.socket.on('message', (message) =>{
  //     this.message$.next(message);
  //   });
  //   return this.message$.asObservable();
  // };
}
