import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {CityListComponent} from './components/city-list/city-list.component'
import {CountryListComponent} from './components/country-list/country-list.component'
import {ContinentListComponent} from './components/continent-list/continent-list.component'
import { CityFormComponent } from './components/city-form/city-form.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

const routes: Routes = [
    {path:'',redirectTo: 'continents' , pathMatch:'full'},
    { path: 'continents', component: ContinentListComponent },
    { path: 'countries/:continent', component: CountryListComponent},
    { path: 'cities/:code', component: CityListComponent},
    { path: 'city/:id', component: CityFormComponent},
    {path: 'tutorial', component: TutorialComponent}
  ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const ROUTE_COMPONENTS = 
[ContinentListComponent,CountryListComponent,CityListComponent,CityFormComponent]