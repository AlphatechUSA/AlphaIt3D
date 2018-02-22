export class GalleryFolder {

    title:string;
    main_photo:string;
    slider_photos:string[];
    num_of_photos:number;

    constructor(main_photo,title,slider_photos){
        this.main_photo=main_photo;
        this.slider_photos=slider_photos;
        this.title=title;
        this.num_of_photos=this.slider_photos.length;
    }


}