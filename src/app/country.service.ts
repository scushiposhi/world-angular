import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../app/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

 
  private _urlContinents = "http://localhost:8080/api/continents";
  private _urlCountry = "http://localhost:8080/api/countries";
  constructor(private http : HttpClient) { }

  getContinents():Observable<[]>{
    console.log(this._urlContinents);
    return this.http.get<[]>(this._urlContinents);
    }
  
  getCountries(continente):Observable<ICountry[]>{
     return this.http.get<ICountry[]>(this._urlCountry,{params: new HttpParams().set('continente',continente)});
    }
}
