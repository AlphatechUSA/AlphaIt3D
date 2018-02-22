import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-enterprise-cloud-service',
  templateUrl: './enterprise-cloud-service.component.html',
  styleUrls: ['./enterprise-cloud-service.component.css']
})
export class EnterpriseCloudServiceComponent extends RipConfigure implements OnInit {

  constructor() {super();
 }

  ngOnInit() {
  }

}
