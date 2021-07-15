import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipient } from '../recipient.model';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})
export class RecipientListComponent implements OnInit {
  recipients: Recipient[] = [];
  constructor(private recipientService: RecipientService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipientService.recipientsChanged.subscribe(
      (recipients: Recipient[]) => {
        this.recipients = recipients;
      }
    )
    this.recipients = this.recipientService.getRecipients();
  }

  onNewRecipient() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
