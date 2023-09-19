import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  roomName!: string;
  message!: any;
  newMessage = '';
  messageList: any = [];
  
  constructor(private chatService: ChatService){}
  
  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    })
  }

  joinRoom() {
    this.chatService.joinRoom(this.roomName);
  }

  sendMessage() {
    // this.chatService.sendMessage(this.roomName, this.message);
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  // sendMessage() {
  //   this.chatService.sendMessage(this.newMessage);
  //   this.newMessage = '';
  // }
}
