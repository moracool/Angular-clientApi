import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }


  //Simulando el inicio de session al backend
  loginSession (login:string, password:any) {    
    if (login == "admin" && password == "admin"){
      //OK CODE
      return ({message: "OK"});
    }else{
      //ERROR CODE
      return ({error: "OK"});

    }
  }
}
