import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { ListPersonComponent } from './list-person/list-person.component';

const routes: Routes = [
  {path:"",redirectTo:"liste",pathMatch:"full"},
  {path:"register",component:RegistrationComponent},
  {path:"liste",component:SerachDeleteComponent},
  {path:"listePerson", component:ListPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
