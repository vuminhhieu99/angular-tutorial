import { Person } from './../../share/models/Person';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-detect-change-child',
  templateUrl: './detect-change-child.component.html',
  styleUrls: ['./detect-change-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetectChangeChildComponent implements OnInit {

  @Input() paramSinge: number = 0;
  oldParamSinge : number = 0;
  @Input() person: Person = {
    name: '',
    age: 0
  };
  @Input() data : Observable<any> = new Observable<any>();
 
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.data.subscribe(data => {this.oldParamSinge = data;}) // không render lại dom
    this.data.subscribe(data => {
      this.oldParamSinge = data;
      this.cdf.markForCheck(); // render lại được
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("child1: ");
    console.log(changes);
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
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
    $(".child-container button").css('background-color',"#17a2b8")
    $(e.target).css('background-color','#007bff');
  }

  showValueConsole(){
    console.log("1:" +JSON.stringify( this.person));
    console.log("1:" +this.paramSinge);   
    console.log(this.oldParamSinge);

  }
  

  setValueOldParamSingle(value: number){
    this.oldParamSinge = value;
  }

  //kiểu gì chả gọi
  // ngAfterContentChecked(): void {
  //  console.log("ngAfterContentChecked: oldVlue = " +this.oldParamSinge);
    
  // }

  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked: oldVlue = " +this.oldParamSinge);    
  }

}
