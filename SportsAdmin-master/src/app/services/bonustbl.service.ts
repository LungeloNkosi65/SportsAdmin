import { Injectable } from '@angular/core';
import { BonusTbl } from '../Models/bonusTbl';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ErrorhandlerService } from '../services/errorhandler.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BonustblService {

  rootUrl = environment.sportsApiUrl;
  param = "BonusTbls"
  paramGet = '/GetAll';
  pramSingle = '/GetSingle'
  bopunusId = '?bonusId='
  constructor(private http: HttpClient, private errorHandler: ErrorhandlerService) { }

  GetBonusTable(): Observable<BonusTbl[]> {
    return this.http.get<BonusTbl[]>(`${this.rootUrl}${this.param}${this.paramGet}`)
      .pipe(catchError(this.errorHandler.handleError));
  }

  GetSingleRecord(bonusId: number): Observable<BonusTbl> {
    return this.http.get<BonusTbl>(`${this.rootUrl}${this.param}${this.pramSingle}${this.bopunusId}${bonusId}`)
      .pipe(catchError(this.errorHandler.handleCrudError));
  }

  AddRecord(bonusTbl: BonusTbl) {
    return this.http.post(`${this.rootUrl}${this.param}`, bonusTbl)
      .pipe(map((data: any) => {
        return data;
      }),
        catchError(this.errorHandler.handleCrudError)
      );
  }


  DeleteRecor(bonusId: number) {
    return  this.http.delete(`${this.rootUrl}${this.param}${this.bopunusId}${bonusId}`)
      .pipe(map((data: any) => {
        return data;
      }),
        catchError(this.errorHandler.handleCrudError)
      );
  }

  UpdateRecord(bonusId:number,bonusTbl:BonusTbl){
    return this.http.put(`${this.rootUrl}${this.param}${this.bopunusId}${bonusId}`,bonusTbl)
    .pipe(map((data:any)=>{
      return data;
    }),catchError(this.errorHandler.handleCrudError));
  }


}
