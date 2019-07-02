import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {CityListComponent} from './city-list/city-list.component'
import {CountryListComponent} from './country-list/country-list.component'
import {ContinentListComponent} from './continent-list/continent-list.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
    //{path:'/',redirectTo: 'continents' , pathMatch:'full'},
    { path: 'continents', component: ContinentListComponent },
    { path: 'countries/:continent', component: CountryListComponent},
    { path: 'cities/:code', component: CityListComponent},
    { path: 'city/:id', component: CityComponent}
     //{path: '**', component:PageNotFoundComponent}
  ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routeComponent = 
[ContinentListComponent,CountryListComponent,CityListComponent,CityComponent,PageNotFoundComponent]