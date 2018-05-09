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
  
  constructor(private http: Http) {
    super();
    this.submited = false;
  }

  ngOnInit() {

  }

  onSend(form: NgForm) {
    form.value.fText
    this.sendClicked=true;
    if(form.valid){
    this.http.post('https://formspree.io/roma.sumbadze@alphait.us',
      form.value).subscribe(
      (response: Response) => {
        form.reset();
        this.submited = true;
        this.sendClicked=false;
      },
      (error: Response) => {
        this.submited=false;
      }
      );
    }
  }

}
