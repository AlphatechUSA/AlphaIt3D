import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { RipConfigure } from '../Model/RipConfigure';
import { GalleryFolder } from '../Model/GalleryFolder';
import { Gallery } from '../Model/Gallery';
import { GalleryGroup } from '../Model/GalleryGroup';
import { routerTransition } from '../Model/cropper';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class GalleryComponent extends RipConfigure implements OnInit {

  //boolean that says show folders or not(true:show,false:dont show)
  showFolders: boolean = true;

  //Object of Whole gallery
  gallery: Gallery;

  //index of group(of clicked folder)
  folderIdI: number;

  //index of clicked folder (inside group)
  folderIdJ: number;

  constructor() {
    super();
    //initi gallery object
    this.getAllImmages();
  }

  ngOnInit() {
  }

  //shows clicked folder(it changes showFolders booleans state and it cause changes because of ngIf in front)
  showSlider($event) {
    this.showFolders = false;
    this.folderIdI = $event.I;
    this.folderIdJ = $event.J;

  }

  //shows all folders
  showAllFolders() {
    this.folderIdI = null;
    this.folderIdJ = null;
    this.showFolders = true;
  }

  //returns GalleryFolder object (folder that we show in slider)
  getFolderToShow() {
    return this.gallery.gallery[this.folderIdI].gallery_folders[this.folderIdJ];
  }

  getAllImmages() {
    this.gallery = new Gallery([
      new GalleryGroup([
        new GalleryFolder("assets/resources/img/gallery/Alpha-Technologies-USA-Inc-Global-HQ-Wilmington-DE-USA/DE-office-01.jpg", "Alpha Technologies USA Inc - Global HQ - Wilmington DE USA", [
          'assets/resources/img/gallery/Alpha-Technologies-USA-Inc-Global-HQ-Wilmington-DE-USA/DE-office-01.jpg',
          'assets/resources/img/gallery/Alpha-Technologies-USA-Inc-Global-HQ-Wilmington-DE-USA/DE-office-04.JPG',
          'assets/resources/img/gallery/Alpha-Technologies-USA-Inc-Global-HQ-Wilmington-DE-USA/DE-office-07.jpg',
          'assets/resources/img/gallery/Alpha-Technologies-USA-Inc-Global-HQ-Wilmington-DE-USA/DE-office-1.jpg',
          'assets/resources/img/gallery/Alpha-Technologies-USA-Inc-Global-HQ-Wilmington-DE-USA/DE-office-2.jpg',
          'assets/resources/img/gallery/Alpha-Technologies-USA-Inc-Global-HQ-Wilmington-DE-USA/DE-office-3.jpg',
          'assets/resources/img/gallery/Alpha-Technologies-USA-Inc-Global-HQ-Wilmington-DE-USA/DE-office-5.jpg'
        ]),
        new GalleryFolder("assets/resources/img/gallery/Upcoming-Office-in-Poland/Poland-2.JPG", "Office in Poland", [
          'assets/resources/img/gallery/Upcoming-Office-in-Poland/Poland-2.JPG',
          'assets/resources/img/gallery/Upcoming-Office-in-Poland/Poland1.JPG'
        ]),
        new GalleryFolder("assets/resources/img/gallery/Upcoming-Office-in-India-Site-Under-Construction/India-Office-3.JPG", "Upcoming Office in India - Site Under Construction", [
          'assets/resources/img/gallery/Upcoming-Office-in-India-Site-Under-Construction/India-Office-3.JPG',
          'assets/resources/img/gallery/Upcoming-Office-in-India-Site-Under-Construction/india-Office-4.JPG',
          'assets/resources/img/gallery/Upcoming-Office-in-India-Site-Under-Construction/India.jpg',
          'assets/resources/img/gallery/Upcoming-Office-in-India-Site-Under-Construction/india2.jpg'
        ]),
        new GalleryFolder("assets/resources/img/gallery/Upcoming-Building-in-Republic-of-Georgia/AlphaHoolding.jpg", "Upcoming Building in Republic of Georgia", [
          'assets/resources/img/gallery/Upcoming-Building-in-Republic-of-Georgia/AlphaHoolding.jpg',
          'assets/resources/img/gallery/Upcoming-Building-in-Republic-of-Georgia/reception.jpg',
        ])
      ]),

      new GalleryGroup([
        new GalleryFolder("assets/resources/img/gallery/Opening-Ceremony-Album/opening-ceramony-1.jpg", "Opening Ceremony Album", [
          'assets/resources/img/gallery/Opening-Ceremony-Album/opening-ceramony-1.jpg',
          'assets/resources/img/gallery/Opening-Ceremony-Album/opening-ceramony-2.jpg',
          'assets/resources/img/gallery/Opening-Ceremony-Album/opening-ceramony-3.jpg'
        ]),
        new GalleryFolder("assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-1%20(1).jpg", "Alpha's I.T Training & Innovation Center Launch Album", [
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-1%20(1).jpg',
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-2.jpg',
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-3.jpg',
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-4.jpg',
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-5.jpg',
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-6.jpg',
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-7.jpg',
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-8.jpg',
          'assets/resources/img/gallery/secondAlphas-IT-Training-Innovation-Center-Launch-Album/AITTAICL-9.jpg'
        ]),
      ]),
      
      new GalleryGroup([
        new GalleryFolder("assets/resources/img/gallery/Alpha-Hosts-Inspiring-Women-in-STEM-Event/IMG_1294.JPG", "Alpha Hosts Inspiring Women in STEM Event", [
          'assets/resources/img/gallery/Alpha-Hosts-Inspiring-Women-in-STEM-Event/IMG_1294.JPG',
          'assets/resources/img/gallery/Alpha-Hosts-Inspiring-Women-in-STEM-Event/IMG_1296.JPG',
          'assets/resources/img/gallery/Alpha-Hosts-Inspiring-Women-in-STEM-Event/IMG_1318.JPG',
          'assets/resources/img/gallery/Alpha-Hosts-Inspiring-Women-in-STEM-Event/IMG_1319.JPG',
          'assets/resources/img/gallery/Alpha-Hosts-Inspiring-Women-in-STEM-Event/IMG_1320.JPG'
        ]),
        new GalleryFolder("assets/resources/img/gallery/thirdAlphas-Corporate-Social-Responsibility-Album/corporate-social-responsibility-1.jpg", "Alpha's Corporate Social Responsibility Album", [
          'assets/resources/img/gallery/thirdAlphas-Corporate-Social-Responsibility-Album/corporate-social-responsibility-1.jpg',
          'assets/resources/img/gallery/thirdAlphas-Corporate-Social-Responsibility-Album/corporate-social-responsibility-2.jpg',
          'assets/resources/img/gallery/thirdAlphas-Corporate-Social-Responsibility-Album/corporate-social-responsibility-3.jpg',
          'assets/resources/img/gallery/thirdAlphas-Corporate-Social-Responsibility-Album/corporate-social-responsibility-4.jpg'
        ]),
        new GalleryFolder("assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-1.jpg", "New Castle County Economic Development Council's 5th Annual Luncheon with...", [
          'assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-1.jpg',
          'assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-2.jpg',
          'assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-3.jpg',
          'assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-4.jpg',
          'assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-5.jpg',
          'assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-6.jpg',
          'assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-7.jpg',
          'assets/resources/img/gallery/thirdNew-Castle-County-Economic-Development-Councils-5th-Annual-Luncheon-with-Congressman-John-Carney-Album/NCCEDCAL-8.jpg'
        ])
      ])
    ]);
  }
}
