import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipient } from '../recipient.model';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient-detail',
  templateUrl: './recipient-detail.component.html',
  styleUrls: ['./recipient-detail.component.css']
})
export class RecipientDetailComponent implements OnInit {
  recipient: Recipient;
  id: number;

  constructor(private route: ActivatedRoute, private recipientService: RecipientService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipient = this.recipientService.getRecipient(this.id);
      }
    )
  }

  onEditRecipient() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteRecipient() {
    this.recipientService.deleteRecipient(this.id);
    this.router.navigate(['/recipients'])
  }

}
