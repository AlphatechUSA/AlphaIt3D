import { Component, OnInit } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import 'jquery';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.css']
})
export class DataAnalyticsComponent extends RipConfigure implements OnInit{

  constructor() {
    super();
  }

  ngOnInit() {
  }
  
}