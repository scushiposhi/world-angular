import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private continent: string = '';
  private _urlContinents = "http://localhost:8080/api/continents";
  private _urlCountry = "http://localhost:8080/api/countries";
  constructor(private http: HttpClient) { }

  setContinent(continente: string) {
    this.continent = continente;
  }
  getContinent(): string {
    return this.continent;
  }

  getContinents(): Observable<[]> {
    console.log(this._urlContinents);
    return this.http.get<[]>(this._urlContinents);
  }

  getCountries(continente): Observable<Country[]> {
    return this.http.get<Country[]>(this._urlCountry, { params: new HttpParams().set('continente', continente) });
  }

  getCountriesAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this._urlCountry + "/all");
  }
}
