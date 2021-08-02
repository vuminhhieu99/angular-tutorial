import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SidebarComponent } from './share/components/sidebar/sidebar.component';
import { HeaderComponent } from './share/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LifecycleComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
