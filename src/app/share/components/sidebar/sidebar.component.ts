import { ModuleService } from './../../services/module.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public _onDestroySub: Subject<void> = new Subject<void>()
  constructor(private moduleService: ModuleService) { }

  modules: Array<string> = [];


  ngOnInit(): void {
    this.initModule();
  }

  initModule(): void{
    this.moduleService.getModuler().subscribe(modules =>this.modules = modules);
  }


}
