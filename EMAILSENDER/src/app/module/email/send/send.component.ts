import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';


@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  mailform:FormGroup
  selectfile: any;

  constructor(private fb:FormBuilder,private c:CommonService){}
ngOnInit():void
{
  this.mailform=this.fb.group({
    toEmail:[''],
    subject:[''],
    textMessage:[''],
  })
}
onselectfile(event:any)
{
  this.selectfile=event.target.files[0];
}

onSend()
{
//this.c.sendEmail(this.mailform.value).subscribe();

const json=JSON.stringify(this.mailform.value)

const data=new FormData();

data.append("file",this.selectfile);
data.append("data",json);

this.c.sendMailWithAttachment(data).subscribe()
alert("Email Sent Successfully....!!!");
}

}
