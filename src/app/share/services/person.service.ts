import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  data : BehaviorSubject<Person> = new BehaviorSubject<Person>(
    {
      name : "name of service",
      age: 22
    }
  );
  constructor() { }

  
}
