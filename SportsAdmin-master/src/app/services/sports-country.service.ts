import { Injectable } from '@angular/core';
import {SportCountry} from '../Models/SportCountry';
import {HttpClient} from '@angular/common/http';
import { ErrorhandlerService } from './errorhandler.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import {SportCountryVm} from '../Models/ViewModels/sportCountryVm';
@Injectable({
  providedIn: 'root'
})
export class SportsCountryService {
 rootUrl=environment.sportsApiUrl;
 param='SportsCountries';
 pramGet='/GetZonke';
 sportCountrId='?sportCountryId=';
  constructor(private http:HttpClient, private errorHander:ErrorhandlerService) { }

  getSportCountries():Observable<SportCountryVm[]>{
    return this.http.get<SportCountryVm[]>(`${this.rootUrl}${this.param}${this.pramGet}`)
    .pipe(catchError(this.errorHander.handleError));
  }

  addSportToCountry(sportCOuntry:SportCountry){
    return this.http.post(`${this.rootUrl}${this.param}`,sportCOuntry)
    .pipe(
      map((data:any)=>{
        return data;
      }),
      catchError(this.errorHander.handleCrudError)
    );
  }

  getSingleSportCountry(sportCountrId:number):Observable<SportCountry>{
    return this.http.get<SportCountry>(`${this.rootUrl}${this.param}/GetSingle${this.sportCountrId}${sportCountrId}`)
    .pipe(
      map((data:any)=>{
        return data;
      }),
      catchError(this.errorHander.handleCrudError)
    );
  }
  deleteSportCountry(sportCountrId:number){
    return this.http.delete(`${this.rootUrl}${this.param}${this.sportCountrId}${sportCountrId}`)
    .pipe(
      map((data:any)=>{
        return data;
      }),
      catchError(this.errorHander.handleCrudError)
    );
  }

  updateSportCountryLink(sportCountryId:number,sportCountry:SportCountry){
    return this.http.put(`${this.rootUrl}${this.param}${this.sportCountrId}${sportCountryId}`,sportCountry)
    .pipe(
      map((data:any)=>{
        return data;
      }),
      catchError(this.errorHander.handleCrudError)
    );
  }
}
