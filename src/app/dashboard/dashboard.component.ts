import { Component, HostBinding, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @HostBinding('style.color') 
  @Input() bgColorKey = 'blue';
  @HostBinding('class.foo') foo = true;
  constructor() { }

  ngOnInit(): void {
  }

}
