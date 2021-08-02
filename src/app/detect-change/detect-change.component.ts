import { Person } from './../share/models/Person';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detect-change',
  templateUrl: './detect-change.component.html',
  styleUrls: ['./detect-change.component.scss']
})
export class DetectChangeComponent implements OnInit {

  public person: Person = {
    name: 'John Doe',
    age: 20
  };
  public paramSinge: number = 0;
  constructor() { }

  ngOnInit(): void {
  } 

  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }

}
