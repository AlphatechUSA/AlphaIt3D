import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-it-training',
  templateUrl: './it-training.component.html',
  styleUrls: ['./it-training.component.css']
})
export class ItTrainingComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
