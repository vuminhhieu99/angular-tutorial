import { Person } from './../../share/models/Person';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PersonService } from 'src/app/share/services/person.service';
import { Subject } from 'rxjs';
import { delay, startWith, takeUntil } from 'rxjs/operators';
import { baseFunction } from 'src/app/share/functions/baseFunction';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifecycleChildComponent implements OnInit, OnDestroy {

  private _unDestroy : Subject<any> = new Subject<any>();
  @Input() paramSinge: number = 0;
  @Input() person: Person = {
    name: '',
    age: 0
  };
  noneParam : String = "";
  constructor(private zone: NgZone, private cdf: ChangeDetectorRef, private personService: PersonService ) { }

  ngOnInit(): void {
    // this.person.name =  this.person.name + " + OnInit";
    // this.paramSinge++;
    const me = this;
    console.log("ngOnInit: -c->");       
    this.personService.data.pipe(takeUntil(this._unDestroy), startWith({name: '123123123',  age: 0 }), delay(5000)).subscribe(data => {
        me.person.name = data.name;
        me.person.age = data.age;
        this.showValueConsole();
    });
    this.noneParam = "sjdiof";
    this.showValueConsole();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //  this.person.name =  this.person.name + " + OnInit";
    // this.paramSinge++;
    console.log("ngOnChange: -c->");
    console.log(changes);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck: -c->");
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // this.person.name =  this.person.name + " + afterViewInit";
    // this.paramSinge++;
    this.showValueConsole();
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit: -c->");

    this.zone.runOutsideAngular(()=>{
      setTimeout(()=>{
        this.person.name =  this.person.name + " + afterContentInit__";
        this.paramSinge++;
      });
    });  
    this.showValueConsole();
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked: -c->");

    // this.person.name =  this.person.name + " + afterContentChecked";
    // this.paramSinge++;
    this.showValueConsole();
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit: -c->");
    // this.zone.runOutsideAngular(() => {   
      // this.person.age =  this.person.age + 1;
      // this.paramSinge++;
      this.noneParam = "dsafasd";
      setTimeout(() => {
        this.personService.data.next({name: "one name", age: 45});  
      })
      
    //   this.zone.run(()=>{;});
    // });
    // this.cdf.detach();
    // this.person.name =  this.person.name + " + afterViewInit";
    //   this.paramSinge++;
    //   // this.cdf.reattach();

    this.showValueConsole();

  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked: -c->");

    // this.person.name =  this.person.name + " + afterViewInit";
    // this.paramSinge++;
    this.showValueConsole();
  }

  showValueConsole() {
    console.log(JSON.stringify(this.person));
    console.log(this.paramSinge);
  }

  modelChange() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.person.age = this.person.age + 1;
        this.paramSinge++;
        this.showValueConsole();
      })
    });
  }
  clickNone() {
    ;
  }

  ngOnDestroy(): void {
    baseFunction.unDestroy(this._unDestroy);
  }
}
