import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../Model/cropper';
import { RipConfigure } from '../Model/RipConfigure';
import { Http, Response } from '@angular/http';
import { NgForm } from '@angular/forms';

declare var GMaps: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class ContactComponent extends RipConfigure implements OnInit {
  submited: boolean;
  sendClicked:boolean;
  hasAnError:boolean;
  
  constructor(private http: Http) {
    super();
    this.submited = false;
    this.hasAnError=false;
    this.sendClicked=false;
  }

  ngOnInit() {

  }
  
  onSend(form: NgForm) {
    this.sendClicked=true;
    if(form.valid){
      this.http.post('https://dry-shore-67948.herokuapp.com/send_email',
      form.value).subscribe(
      (response: Response) => {
        this.submited = true;
        setTimeout(()=>this.resetInfo(form),10000);
      },
      (error: Response) => {
        this.hasAnError=true;
        setTimeout(()=>this.resetInfo(form),10000);
      } 
      );
    }
  }

  resetInfo(form:NgForm){
    this.submited=false;
    this.sendClicked=false;
    this.hasAnError=false;
    form.reset();
  }

}
