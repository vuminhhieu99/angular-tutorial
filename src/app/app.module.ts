import { DetectChangeChildComponent } from './detect-change/detect-change-child/detect-change-child.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SidebarComponent } from './share/components/sidebar/sidebar.component';
import { HeaderComponent } from './share/components/header/header.component';
import { DetectChangeComponent } from './detect-change/detect-change.component';
import { FormsModule } from '@angular/forms';
import { DetectChangeChildChildComponent } from './detect-change/detect-change-child-child/detect-change-child-child.component';
import { DetectChangeChild2Component } from './detect-change/detect-change-child2/detect-change-child2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
    LifecycleComponent,
    SidebarComponent,
    HeaderComponent,
    DetectChangeComponent,
    DetectChangeChildComponent,
    DetectChangeChildChildComponent,
    DetectChangeChild2Component  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    BrowserAnimationsModule
         
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
