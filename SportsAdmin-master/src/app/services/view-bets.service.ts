import { Injectable } from '@angular/core';
import {SubimtBet} from '../Models/submitedBet';
import { IBetTbl } from '../Models/betItem';
import { IBetSLip } from '../Models/betSlip';
import {HttpClient} from '@angular/common/http';
import { ErrorhandlerService } from './errorhandler.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ViewBetsService {

rootUrl=environment.sportsApiUrl;
param='Betting/';
paramBetItems='GetBetEvents/';
poaramBet='GetBets/';

  constructor(private http:HttpClient,private errorHanlderService:ErrorhandlerService) { }

  getBetEvents():Observable<IBetTbl[]>{
    return this.http.get<IBetTbl[]>(`${this.rootUrl}${this.param}${this.paramBetItems}`)
    .pipe(catchError(this.errorHanlderService.handleError));
  }

  getBets():Observable<IBetSLip[]>{
    return this.http.get<IBetSLip[]>(`${this.rootUrl}${this.param}${this.poaramBet}`)
    .pipe(catchError(this.errorHanlderService.handleError));
  }
}
