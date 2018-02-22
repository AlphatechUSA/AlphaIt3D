import { GalleryFolder } from "./GalleryFolder";

export class GalleryGroup {
    gallery_folders:GalleryFolder[];

    constructor(gallery_folders){
        this.gallery_folders=gallery_folders;
    }
}