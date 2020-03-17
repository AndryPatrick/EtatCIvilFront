import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import {UserRegistrationService} from './user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule }  from'@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { CommonModule } from '@angular/common';
import { AddPersonComponent } from './add-person/add-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SerachDeleteComponent,
    AddPersonComponent,
    ListPersonComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, 
    CommonModule,
    NgbModule,

  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
