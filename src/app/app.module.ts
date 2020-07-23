import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import {UserRegistrationService} from './user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import {FormsModule }  from'@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { UpdateProinceComponent } from './update-proince/update-proince.component';
import {DataTablesModule} from 'angular-datatables';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SerachDeleteComponent,
    routingComponents,
    UpdateProinceComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule, 
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    DataTablesModule,
    MatTableModule,
    BsDatepickerModule.forRoot()
    
  ],
  exports: [
    MatTableModule
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
