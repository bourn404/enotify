import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotificationsComponent } from "./notifications/notifications.component";
import { RecipientDetailComponent } from "./recipients/recipient-detail/recipient-detail.component";
import { RecipientEditComponent } from "./recipients/recipient-edit/recipient-edit.component";
import { RecipientStartComponent } from "./recipients/recipient-start/recipient-start.component";
import { RecipientsComponent } from "./recipients/recipients.component";
const appRoutes: Routes = [
    { path:'',redirectTo:'/notifications', pathMatch: 'full' },
    { path: 'recipients',component:RecipientsComponent, children: [
        { path: '', component: RecipientStartComponent},
        { path: 'new', component: RecipientEditComponent },
        { path: ':id', component: RecipientDetailComponent },
        { path: ':id/edit', component: RecipientEditComponent },
    ]},
    { path: 'notifications',component:NotificationsComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}