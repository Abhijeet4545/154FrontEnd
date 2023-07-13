import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  

  constructor(private http:HttpClient) { }

  sendMailWithAttachment(data:any) {
  return this.http.post("http://localhost:9090/emailwithattachment",data);
  }
}
