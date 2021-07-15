import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipient } from '../recipient.model';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient-edit',
  templateUrl: './recipient-edit.component.html',
  styleUrls: ['./recipient-edit.component.css']
})
export class RecipientEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipientForm: FormGroup;

  constructor(private route:ActivatedRoute, private recipientService: RecipientService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    const newRecipient = new Recipient(
      this.recipientService.getNextId(),
      this.recipientForm.value['name'],
      this.recipientForm.value['email'],
      this.recipientForm.value['phone'],
      this.recipientForm.value['lang'],
      [] // messages
    );

    if(this.editMode) {
      this.recipientService.updateRecipient(this.id,newRecipient)
    } else {
      this.recipientService.addRecipient(newRecipient)
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo:this.route});
  }

  private initForm() {
    let recipientName = '';
    let recipientEmail = '';
    let recipientPhone = '';
    let recipientLang = '';

    if(this.editMode) {
      const recipient = this.recipientService.getRecipient(this.id);
      recipientName = recipient.name;
      recipientEmail = recipient.email;
      recipientPhone = recipient.phone;
      recipientLang = recipient.lang;
    }

    this.recipientForm = new FormGroup({
      'name': new FormControl(recipientName, Validators.required),
      'email': new FormControl(recipientEmail, Validators.required),
      'phone': new FormControl(recipientPhone, Validators.required),
      'lang': new FormControl(recipientLang)
    });
  }

}
