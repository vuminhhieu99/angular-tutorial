import { Person } from './../../share/models/Person';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detect-change-child-child',
  templateUrl: './detect-change-child-child.component.html',
  styleUrls: ['./detect-change-child-child.component.scss']
})
export class DetectChangeChildChildComponent implements OnInit {

  @Input() paramSinge: number = 0;
  @Input() name: string="trống";
  constructor() { }

  ngOnInit(): void {
  }

}
