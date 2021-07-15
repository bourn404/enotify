import { Injectable } from "@angular/core";
import { RecipientService } from "../recipients/recipient.service";
import { Notification } from "./notification.model";

@Injectable()
export class NotificationService {

    constructor(private recipientService: RecipientService){}

    sendNotification(notification:Notification) {
        this.recipientService.addNotification(notification);
    }
}