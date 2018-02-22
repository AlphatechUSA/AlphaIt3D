import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../Model/cropper';
import { RipConfigure } from '../Model/RipConfigure';
// import "../../assets/vendors/js/gmaps";
declare var GMaps: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class ContactComponent extends RipConfigure implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // head office
    var map = new GMaps({
      div: '#map-head-office',
      lat: 39.742072,
      lng: -75.547221,
      zoom: 15,
      scrollwheel: false
    });
    map.addMarker({
      lat: 39.742072,
      lng: -75.547221
    });
    // poland 1
    map = new GMaps({
      div: '#map-poland-office',
      lat: 51.077558,
      lng: 16.995759,
      zoom: 15,
      scrollwheel: false
    });
    map.addMarker({
      lat: 51.077558,
      lng: 16.995759
    });

    // poland 2
    map = new GMaps({
      div: '#map-poland-office-2',
      lat: 52.235648,
      lng: 20.998091,
      zoom: 15,
      scrollwheel: false
    });
    map.addMarker({
      lat: 52.235648,
      lng: 20.998091
    });

    // india
    var map = new GMaps({
      div: '#map-india-office',
      lat: 30.713942,
      lng: 76.696130,
      zoom: 15,
      scrollwheel: false
    });
    map.addMarker({
      lat: 30.713942,
      lng: 76.696130
    });

    // georgia
    map = new GMaps({
      div: '#map-georgia-office',
      lat: 41.707740099999995,
      lng: 44.734847699999996,
      zoom: 15,
      scrollwheel: false
    });
    map.addMarker({
      lat: 41.707740099999995,
      lng: 44.734847699999996
    });

    // london
    map = new GMaps({
      div: '#map-london-office',
      lat: 51.530833,
      lng: -0.093806,
      zoom: 15,
      scrollwheel: false
    });
    map.addMarker({
      lat: 51.530833,
      lng: -0.093806
    });

    // switzerlands
    map = new GMaps({
      div: '#map-switzerland-office',
      lat: 47.174522,
      lng: 8.512408,
      zoom: 15,
      scrollwheel: false
    });
    map.addMarker({
      lat: 47.174522,
      lng: 8.512408
    });
  }


}
