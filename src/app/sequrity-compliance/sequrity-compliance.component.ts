import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-sequrity-compliance',
  templateUrl: './sequrity-compliance.component.html',
  styleUrls: ['./sequrity-compliance.component.css']
})
export class SequrityComplianceComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
