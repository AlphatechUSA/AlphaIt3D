import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-mobility-wireless',
  templateUrl: './mobility-wireless.component.html',
  styleUrls: ['./mobility-wireless.component.css']
})
export class MobilityWirelessComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
