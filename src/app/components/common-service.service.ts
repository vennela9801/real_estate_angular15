import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AgentModel } from '../models/agent-model.model';
import { ResponseStatus } from '../models/response-status.model';
import { SearchModel } from '../models/search-model.model';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };
  constructor(private http: HttpClient) { }

  addNewAgent(agent: AgentModel): Observable<ResponseStatus> {
    let url = 'http://localhost:8080/realEstate/addNewAgent';
    return this.http.post<ResponseStatus>(url,agent,this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  searchRecords(searchModel: SearchModel): Observable<ResponseStatus> {
    let url = 'http://localhost:8080/realEstate/searchRequest';
    return this.http.post<ResponseStatus>(url,searchModel,this.httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
