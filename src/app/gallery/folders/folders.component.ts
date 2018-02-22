import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { GalleryFolder } from '../../Model/GalleryFolder';
import { RipConfigure } from '../../Model/RipConfigure';
import { GalleryGroup } from '../../Model/GalleryGroup';
import { loadImmages } from '../../Model/cropper';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent extends RipConfigure implements OnInit {
  
  //array of grouped files(each grop has its folders) that we are going to show
  @Input() gallery:GalleryGroup[];

  //event that sends info(i(group index) and j(folder index) index of clicked elemnts ) to parent(gallery)
  @Output() folderClick = new EventEmitter<{I:number,J:number}>();
  
  //function that throws event onfolderclicking
  onFolderClick(clickedPageI,clickedPageJ){
    this.folderClick.emit({I:clickedPageI,J:clickedPageJ});
  }

  constructor() {
    super();
  }
  
  ngOnInit() {
    loadImmages();
  }

}
