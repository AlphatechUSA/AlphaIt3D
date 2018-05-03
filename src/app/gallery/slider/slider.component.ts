import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { GalleryFolder } from '../../Model/GalleryFolder';
import { RipConfigure } from '../../Model/RipConfigure';
import { galleryJs, loadImmages } from '../../Model/cropper';
import { AfterContentInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
// import * as $ from "jquery";
declare var $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {
  // event that appears on clicking backToFolders button
  @Output() backToFolders = new EventEmitter<void>();

  // GalleryFolder object that contains info of folder that we will show in slider
  @Input() galleryFolder: GalleryFolder;

  constructor() {
  }

  // function that throws backToFolders event
  onBackToFolders() {
    this.backToFolders.emit();
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    $('.ripslider').slick({
      dots: false,
      infinite: false,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      lazyLoad: 'ondemand'
    });
    loadImmages();
  }
}
