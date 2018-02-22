import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-network-engineering',
  templateUrl: './network-engineering.component.html',
  styleUrls: ['./network-engineering.component.css']
})
export class NetworkEngineeringComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
