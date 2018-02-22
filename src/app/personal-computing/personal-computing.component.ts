import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-personal-computing',
  templateUrl: './personal-computing.component.html',
  styleUrls: ['./personal-computing.component.css']
})
export class PersonalComputingComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
