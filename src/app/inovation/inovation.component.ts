import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-inovation',
  templateUrl: './inovation.component.html',
  styleUrls: ['./inovation.component.css']
})
export class InovationComponent extends RipConfigure implements OnInit {

  constructor() {super();
 }

  ngOnInit() {
  }

}
