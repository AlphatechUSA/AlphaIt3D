import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-av-vc-services',
  templateUrl: './av-vc-services.component.html',
  styleUrls: ['./av-vc-services.component.css']
})
export class AvVcServicesComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
 }

  ngOnInit() {
  }

}
