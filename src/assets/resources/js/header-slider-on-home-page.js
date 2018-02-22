(function() {

    function Slideshow( element ) {
        this.el = document.querySelector( element );
        this.init();
    }

    Slideshow.prototype = {
        init: function() {
            this.wrapper = this.el.querySelector( ".img-info-wraper" );
            this.slides = this.el.querySelectorAll( ".slideee" );
            this.previous = this.el.querySelector( ".slideer-previous" );
            this.next = this.el.querySelector( ".slider-next" );
            this.index = 0;
            this.total = this.slides.length;
            this.timer = null;

            this.action();
            this.stopStart();	
        },
        _slideTo: function( slide ) {
            var currentSlide = this.slides[slide];
            currentSlide.style.opacity = 1;
            currentSlide.style.zIndex = 10;
            currentSlide.style.transform = 'scale(1)';
            currentSlide.style['-o-transform'] = 'scale(1)';
            currentSlide.style['-webkit-transform'] = 'scale(1)';
            currentSlide.style['-moz-transform'] = 'scale(1)';
            currentSlide.style['border-radius'] = '0%';
            
            currentSlide.style['-o-border-radius'] = '0%';
            currentSlide.style['--webkit-border-radius'] = '0%';
            currentSlide.style['-moz-border-radius'] = '0%';

                for( var i = 0; i < this.slides.length; i++ ) {
                    var slide = this.slides[i];
                    if( slide !== currentSlide ) {
                        slide.style.zIndex = 0;
                        
                        slide.style.opacity = 0;
                        slide.style.transform = 'scale(0)';
                        slide.style['-o-transform'] = 'scale(0)';
                        slide.style['-webkit-transform'] = 'scale(0)';
                        slide.style['-moz-transform'] = 'scale(0)';
                        slide.style['border-radius'] = '20%';
                        
                        slide.style['-o-border-radius'] = '20%';
                        slide.style['-webkit-border-radius'] = '20%';
                        slide.style['-moz-border-radius'] = '20%';
                        

                    }
                }
        },
        action: function() {
            var self = this;
            self.timer = setInterval(function() {
                self.index++;
                if( self.index == self.slides.length ) {
                    self.index = 0;
                }
                self._slideTo( self.index );

            }, 6000);
        },
        stopStart: function() {
            var self = this;
            self.el.addEventListener( "mouseover", function() {
                clearInterval( self.timer );
                self.timer = null;

            }, false);
            self.el.addEventListener( "mouseout", function() {
                self.action();

            }, false);
        }
    };
    document.addEventListener( "DOMContentLoaded", function() {
        var slider = new Slideshow( "#main-slider1" );
        var slider2 = new Slideshow( "#main-slider2" );
        var slider3 = new Slideshow( "#main-slider3" );
    });
})();