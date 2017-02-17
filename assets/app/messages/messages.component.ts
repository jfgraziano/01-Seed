import { Component } from "@angular/core"

@Component({
    selector: 'app-messages',
    template: `
    <div class="row">
        <!--<div class="col-md-8 col-md-offset-2">-->
            <!--<app-message [message]="message" (editClicked)="message.content = $event"></app-message>-->
<!--            <app-message
                [message]="message"
                (editClicked)="message.content = $event"
                *ngFor="let message of messages">
            </app-message>-->

        <!--</div>-->
        <app-message-input></app-message-input>
    </div>
    <hr>
    <div class="row">
        <app-message-list></app-message-list>
    </div>
    
    `
})

export class MessagesComponent {

}
