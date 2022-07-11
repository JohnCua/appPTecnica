import { Injectable, Optional } from '@angular/core';

export class ContactFormConfig {
  variableURL = '';
}

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  public _baseURL = '';

  constructor( @Optional() config?: ContactFormConfig) {
    if (config) { this._baseURL = config.variableURL; }
  }


  get URL() {
   // return 
   return this._baseURL;
  }


  // postContactos(data:any) {
  //   return this.http.post(`${this._baseURL}`, data)
  // }
  

}
