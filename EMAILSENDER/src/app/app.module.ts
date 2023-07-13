import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { EmailModule } from './module/email/email.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,RouterModule,HttpClientModule,EmailModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
