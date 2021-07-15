import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Notification } from './notification.model';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [NotificationService]
})
export class NotificationsComponent implements OnInit {

  constructor(private notifService: NotificationService) { }

  ngOnInit(): void {
    
  }

  onSendText(form: NgForm) {
    const newNotification = new Notification('1','Text',form.value.message)
    this.notifService.sendNotification(newNotification);
    form.reset();
  }

  onSendEmail(form: NgForm) {
    const newNotification = new Notification('1','Email',form.value.message)
    this.notifService.sendNotification(newNotification);
    form.reset();
  }

}
