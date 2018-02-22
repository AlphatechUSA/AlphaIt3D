import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';

@Component({
  selector: 'app-field-branch',
  templateUrl: './field-branch.component.html',
  styleUrls: ['./field-branch.component.css']
})
export class FieldBranchComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    
  }

}
