import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../Model/cropper';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-training-automation',
  templateUrl: './training-automation.component.html',
  styleUrls: ['./training-automation.component.css']
})
export class TrainingAutomationComponent extends RipConfigure implements OnInit {

  constructor() {super();
 }

  ngOnInit() {
  }

}
