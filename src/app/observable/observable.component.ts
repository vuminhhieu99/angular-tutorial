import { of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  source: number = 0;

  sourceSub: number = 0;
  constructor() { }

  ngOnInit(): void {

  }

  private run(){
    
    of(1,2,3).pipe(startWith(0))
  }
  private reset(){
    
  }

  

}
