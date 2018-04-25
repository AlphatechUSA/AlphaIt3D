$(document).ready(function () {

    /*---Smooth scroll---*/
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('#cube section').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    function loadImmages() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('data-src')) {
                imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
            }
        }
    }



    // slides (up,down) the navbar
    function ripslideToogle() {
        nav.slideToggle(300);//hides or shows navbar
        if (icon.hasClass('ion-navicon-round')) {//if navbar icon is clicked to show navbar
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {//if navbar icon is clicked to close navbar
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    }


    $(".rip-video-container div span").click(function () {
        //        $(this).parent().find('iframe')[0].src += "&autoplay=1";
        var iframe;
        iframe = $(this).parent().find('iframe')[0];
        var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
        if (requestFullScreen) {
            requestFullScreen.bind(iframe)();
        }
    }
    );


    // load cube after 2 seconds 
    $("#cube").addClass("load-cube");
    $("#cube").css("opacity", "1");

    // load immages after first load in 15 secconds
    setTimeout(function () { 
        loadImmages();
    }, 8000);
    
    setTimeout(function () { 
        $("nav").show();
    }, 5000);
    setTimeout(function () { 
        $("nav").css("opacity","1");
    }, 6000);

    // controls navbar
    var icon = $('.js--mobile-nav-icon i');
    var nav = $('.js--main-nav');
    $(".js--main-nav a,.js--mobile-nav-icon").click(function () {
        // check if we are using mobile nav or not
        if ($(".mobile-nav-icon").css('display') != 'none') {
            ripslideToogle();
        }
    });
});