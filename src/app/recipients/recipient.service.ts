import { Subject } from "rxjs";
import { Notification } from "../notifications/notification.model";
import { Recipient } from "./recipient.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipientService {
    recipientsChanged = new Subject<Recipient[]>();

    constructor(private http:HttpClient){}

    private recipients: Recipient[] = [];

    storeRecipients() {
        this.http.put(
            'https://enotify-68d83-default-rtdb.firebaseio.com/recipients.json',
            this.recipients)
            .subscribe(response=>{
                this.recipientsChanged.next(this.recipients.slice());
        });
    }

    addNotification(notification:Notification) {
        for(let i=0; i<this.recipients.length; i++) {
            if(this.recipients[i].inbox) {
                this.recipients[i].inbox.push(notification)
            } else {
                this.recipients[i].inbox = [notification]
            }
        }
        this.storeRecipients();
    }

    getRecipients() {
        this.http.get<Recipient[]>('https://enotify-68d83-default-rtdb.firebaseio.com/recipients.json')
        .subscribe(
            (recipients: Recipient[]) => {
                this.recipients = recipients
                if(!recipients) this.recipients = []
                this.recipientsChanged.next(this.recipients.slice());
            }, (error:any) => {
                console.log(error);
            }
        )
        return this.recipients;
    }

    getRecipient(id:number) {
        return this.recipients.slice().find(recipient => {
            return recipient.id == id;
        })
    }

    getNextId() {
        if(this.recipients.length) return this.recipients.reduce((a,b)=>a.id>b.id?a:b).id + 1;
        return 1;
    }

    addRecipient(recipient: Recipient) {
        this.recipients.push(recipient);
        this.storeRecipients();
    }

    updateRecipient(id: number, newRecipient: Recipient) {
        newRecipient.id = id;
        for(let i=0; i<this.recipients.length; i++) {
            if(this.recipients[i].id == id){
                this.recipients[i] = newRecipient
            }
        }
        this.storeRecipients()
    }

    deleteRecipient(id: number) {
        this.recipients = this.recipients.filter(recipient => {
            return recipient.id != id;
        })
        this.recipientsChanged.next(this.recipients.slice());
        this.storeRecipients()
    }

}