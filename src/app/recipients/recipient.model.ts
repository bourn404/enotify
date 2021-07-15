import { Notification } from "../notifications/notification.model";

export class Recipient {
    constructor(
        public id: number,
        public name: string, 
        public email: string,
        public phone: string,
        public lang: string,
        public inbox: Notification[]
    ) {}
}