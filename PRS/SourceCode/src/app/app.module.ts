import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComComponent } from './main-com/main-com.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';
import { RouComponent } from './rou/rou.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComComponent,
    Header1Component,
    Footer1Component,
    RouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
