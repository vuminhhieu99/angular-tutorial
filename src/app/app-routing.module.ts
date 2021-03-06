import { DetectChangeComponent } from './detect-change/detect-change.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,    
  },
  {
    path: 'lifecycle',
    component: LifecycleComponent,    
  },
  {
    path: 'detectchange',
    component: DetectChangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
