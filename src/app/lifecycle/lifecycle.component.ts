import { Person } from './../share/models/Person';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']

})
export class LifecycleComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  
  public person: Person = {
    name: 'John Doe',
    age: 20
  };
  public paramSinge: number = 0;

  constructor(private cdf : ChangeDetectorRef) { }

  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }

  addSingleParam(){
    this.paramSinge++;
  }

  showValueConsole(){
    console.log(JSON.stringify( this.person));
    console.log(this.paramSinge); 
  }

  ngOnInit(): void {
    // this.person.name =  this.person.name + " + (OnInit)";
    // this.paramSinge++;
    console.log("ngOnInit: -p->");
    this.showValueConsole();     
  } 

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange: -p->");
    console.log(changes);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.    
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // this.person.name =  this.person.name + " + (afterViewInit)";
    // this.paramSinge++;
    console.log("ngDoCheck -p:");
    this.showValueConsole(); 
  }
  ngAfterContentInit(){
    // this.person.name =  this.person.name + " + (afterContentInit)";
    // this.paramSinge++;
    console.log("ngAfterContentInit -p:");
    this.showValueConsole(); 
  }

  ngAfterContentChecked(){
    // this.person.name =  this.person.name + " + (afterContentChecked)";
    // this.paramSinge++;
    console.log("ngAfterContentChecked -p:");
    this.showValueConsole(); 
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit -p:");
    // this.person.name =  this.person.name + " + (afterViewInit)";
    // this.paramSinge++;
    this.showValueConsole();    

  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked -p:");
    // this.person.name =  this.person.name + " +(afterViewInit)";
    // this.paramSinge++;
    this.showValueConsole();    
  }

  createObj(){
    this.person = {  name: 'John hieu',
    age: 21};
  }
}
