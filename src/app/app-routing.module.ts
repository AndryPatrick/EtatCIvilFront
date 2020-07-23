import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { CommuneComponent } from './commune/commune.component';
import { DistrictComponent } from './district/district.component';
import { ProvinceComponent } from './province/province.component';
import { RegionComponent } from './region/region.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { UpdateProinceComponent } from './update-proince/update-proince.component';

const routes: Routes = [
  {path:"",redirectTo:"listePerson",pathMatch:"full"},
  {path : "register",component:RegistrationComponent},
  {path : "liste",component:SerachDeleteComponent},
  {path : "listePerson", component:ListPersonComponent},
  {path : "listeProvince", component:ProvinceComponent},
  {path : "listeRegion", component:RegionComponent},
  {path : "listeDistrict", component:DistrictComponent},
  {path : "listeCommune" , component:CommuneComponent},
  {path : "ajoutPersonne" , component:AjoutPersonneComponent},
  {path : "update/:id", component:UpdateProinceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationComponent, SerachDeleteComponent, ListPersonComponent,CommuneComponent,DistrictComponent,
                                  ProvinceComponent, RegionComponent, AjoutPersonneComponent,UpdateProinceComponent]