import { Component } from "@angular/core";
import { OnInit } from "@angular/core"
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                [message]="message"
                *ngFor="let message of messages">
            </app-message>
        </div>
    `
})
export class MessageListComponent implements OnInit {
 messages: Message[];
 /*= [
    new Message('some message', 'Ted'),
    new Message('something else', 'Ted'),
    new Message('third message', 'Ted')
    ];*/
constructor(private messageService: MessageService) {}

ngOnInit() {
    //this.messages = this.messageService.getMessages();
    this.messageService.getMessages()
        .subscribe (
            (messages: Message[]) => {
                this.messages = messages;
            }
        )    
}
}
