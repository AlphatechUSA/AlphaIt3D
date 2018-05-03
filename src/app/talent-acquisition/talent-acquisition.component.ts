import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../Model/cropper';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-talent-acquisition',
  templateUrl: './talent-acquisition.component.html',
  styleUrls: ['./talent-acquisition.component.css']
})
export class TalentAcquisitionComponent extends RipConfigure implements OnInit {

  constructor() {super();
 }

  ngOnInit() {
  }

}
