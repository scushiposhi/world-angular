import { Injectable } from '@angular/core';
import {CountryService} from './country.service'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city/city';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CityService {


  private countryList : Country[]
  private _url: string = "http://localhost:8080/api/cities";

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this._url);
  }
  
  getCityById(id): Observable<City> {
    return this.http.get<City>(this._url + "/" + id);
  }
  deleteCityById(id): Observable<City> {
    return this.http.delete<City>(this._url + "/" + id);
  }
  putCityService(citta: City): Observable<City> {
    return this.http.put<City>(this._url, citta);
  }
  postCityService(citta: City) {
    return this.http.post<City>(this._url, citta);
  }
  getCitiesByCode(countryCode): Observable<City[]> {
    return this.http.get<City[]>(this._url, { params: new HttpParams().set("codice", countryCode) });
  }
}
