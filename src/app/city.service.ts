import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICity} from './city/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private _url : string ="http://localhost:8080/api/cities";

  constructor(private http : HttpClient) { }
  getCities():Observable<ICity[]>{
    return this.http.get<ICity[]>(this._url);
  }
  getCityById(id):Observable<ICity>{
    return this.http.get<ICity>(this._url+"/"+id);
  }
  deleteCityById(id):Observable<ICity>{
    return this.http.delete<ICity>(this._url+"/"+id);
  }
 putCityService(citta:ICity):Observable<ICity>{
    return this.http.put<ICity>(this._url,citta);
  }
  postCityService(citta:ICity){
    return this.http.post<ICity>(this._url,citta);
  }
  getCitiesByCode(countryCode):Observable<ICity[]>{
    return this.http.get<ICity[]>(this._url,{params: new HttpParams().set("codice",countryCode)});
  }
}
