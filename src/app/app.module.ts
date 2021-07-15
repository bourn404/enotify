import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipientsComponent } from './recipients/recipients.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RecipientListComponent } from './recipients/recipient-list/recipient-list.component';
import { RecipientDetailComponent } from './recipients/recipient-detail/recipient-detail.component';
import { RecipientItemComponent } from './recipients/recipient-list/recipient-item/recipient-item.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipientService } from './recipients/recipient.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipientEditComponent } from './recipients/recipient-edit/recipient-edit.component';
import { RecipientStartComponent } from './recipients/recipient-start/recipient-start.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipientsComponent,
    NotificationsComponent,
    RecipientListComponent,
    RecipientDetailComponent,
    RecipientItemComponent,
    DropdownDirective,
    RecipientEditComponent,
    RecipientStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RecipientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
