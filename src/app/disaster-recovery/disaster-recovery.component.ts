import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-disaster-recovery',
  templateUrl: './disaster-recovery.component.html',
  styleUrls: ['./disaster-recovery.component.css']
})
export class DisasterRecoveryComponent extends RipConfigure implements OnInit{

  constructor() {
    super();
 }

  ngOnInit() {
  }
}
