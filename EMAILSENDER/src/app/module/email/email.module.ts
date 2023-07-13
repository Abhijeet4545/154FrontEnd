import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from './send/send.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SendComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule,HttpClientModule
  ],
  exports:[
    SendComponent
  ]
})
export class EmailModule { }
