import { Modules } from './../constants/modules';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ModuleService {

   moduleUrl ='api/heroes';
  constructor() {   
   }    
  
  getModuler(): Observable<any>{
    const modules = of(Modules);
    return modules;
  }
// /** GET heroes from the server */
//    getModuler(): Observable<string>{
//        return this.http.get<string>(this.moduleUrl);
//   }

}
