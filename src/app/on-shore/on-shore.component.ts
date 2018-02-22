import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';
import { routerTransition } from '../Model/cropper';

@Component({
  selector: 'app-on-shore',
  templateUrl: './on-shore.component.html',
  styleUrls: ['./on-shore.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class OnShoreComponent extends RipConfigure implements OnInit {

  constructor() {super();
 }

  ngOnInit() {
  }

}
