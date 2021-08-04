import { Person } from './../../share/models/Person';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-detect-change-child2',
  templateUrl: './detect-change-child2.component.html',
  styleUrls: ['./detect-change-child2.component.scss']
})
export class DetectChangeChild2Component implements OnInit {


  @Input() paramSinge: number = 0;
  @Output() paramSingeChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() person: Person = {
    name: '',
    age: 0
  };
  constructor(private cdf: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("child2: ");
    console.log(changes);
    
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
    $(".child-container-2 button").css('background-color',"#17a2b8")
    $(e.target).css('background-color','#007bff');
  }

  showValueConsole(){
    console.log("2:" + JSON.stringify( this.person));
    console.log("2:" + this.paramSinge);   
  }

  modelChange(){
    this.paramSingeChange.emit(this.paramSinge);
  }
}
