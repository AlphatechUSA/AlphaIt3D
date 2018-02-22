import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../Model/cropper';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class SalesComponent extends RipConfigure implements OnInit {
  constructor() {super();
 }
  ngOnInit() {
  }

}
