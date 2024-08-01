import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  
  constructor(private http: HttpClient) {

  }

  getUsers():Observable<any[]>{
    //console.log(' JsonplaceholderService getUsers ---> ENTRO');
    return this.http.get<any[]>(`${environment.customerService.url}users`);
  }

  setUser(json:any){ 
    return this.http.post<any>(`${environment.customerService.url}users`, json , {'headers': {'Content-type': 'application/json; charset=UTF-8'}});          
    //return true; 
  }
  
  putUser(json:any, id:any){ 
    return this.http.put<any>(`${environment.customerService.url}users/${id}`, json , {'headers': {'Content-type': 'application/json; charset=UTF-8'}});          
    //return true; 
  }

  delUser( id:any){ 
    return this.http.delete<any>(`${environment.customerService.url}users/${id}`, {'headers': {'Content-type': 'application/json; charset=UTF-8'}});          
    //return true; 
  }
}
