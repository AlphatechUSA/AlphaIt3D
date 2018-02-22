import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

import { trigger, state, animate, transition, style } from '@angular/animations';
import { routerTransition } from '../Model/cropper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
  
  // make fade in animation available to this component
  // animations: [trigger(
  //   'fadeInAnimation',
  //   [
  //     transition(":enter", [
  //       style({ opacity: 0 }),
  //       animate('3000ms', style({ opacity: 1 }))
  //     ]),
  //     transition(":leave", [
  //       animate('3000ms', style({ opacity: 0 }))
  //     ])
  //   ])
  // ],

  // attach the fade in animation to the host (root) element of this component
  // host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
