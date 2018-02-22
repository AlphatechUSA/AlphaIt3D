import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-enterprise-helpdesk',
  templateUrl: './enterprise-helpdesk.component.html',
  styleUrls: ['./enterprise-helpdesk.component.css']
})
export class EnterpriseHelpdeskComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
