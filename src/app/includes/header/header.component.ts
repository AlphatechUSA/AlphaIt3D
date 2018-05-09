import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //we can add alias
  @Output() navbarClick = new EventEmitter<String>();

  constructor(
    private location: Location
  ) { }

  onGoBack() {
    console.log("backkk");
    this.location.back();
  }


  ngOnInit() {
  }

  onNavbarClick(clickedPage: String) {
    this.navbarClick.emit(clickedPage);
  }

  private _location: Location


}
