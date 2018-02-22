import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //we can add alias
  @Output() navbarClick = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onNavbarClick(clickedPage: String) {
    this.navbarClick.emit(clickedPage);
  }


}
