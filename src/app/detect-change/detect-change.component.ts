import { Person } from './../share/models/Person';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var $: any;

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

  public data$  = new BehaviorSubject(-1);
 
  constructor(private cdf : ChangeDetectorRef) { }

  ngOnInit(): void {
  } 

  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }
  addSingleParam(){
    this.paramSinge++;
  }

  detectChange(e: any){    
    this.setColorButton(e);
    this.cdf.detectChanges();
  }

  detach(e: any){   
    this.setColorButton(e);
    this.cdf.detach();
  }

  reattach(e: any){   
    this.setColorButton(e);
    this.cdf.reattach();
  }

  markForCheck(e: any){    
    this.setColorButton(e);
    this.cdf.markForCheck();
  }

  setColorButton(e: any){
    $(".container>div>button").css('background-color',"#17a2b8")
    $(e.target).css('background-color','#007bff');
  }

  showValueConsole(){
    console.log(JSON.stringify( this.person));
    console.log(this.paramSinge);  
     
  }

  streamOldParamSingle(){
      this.data$.next(100);
  }
}
