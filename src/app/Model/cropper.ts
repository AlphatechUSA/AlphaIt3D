var counter = 0;
export function updateCube(): void {
    var box = document.querySelector('#theArt').children[0],
        showPanelButtons = document.querySelectorAll('#show-buttons a'),
        panelClassName = "show-front";

    function onButtonClick(event) {
        box.classList.remove(panelClassName);
        panelClassName = event.target.className;
        box.className += " " + panelClassName;
    };

    for (var i = 0, len = showPanelButtons.length; i < len; i++) {
        showPanelButtons[i].addEventListener('click', onButtonClick, false);
    }
    var cube = document.getElementById("cube");

    if (counter != 0) {
        cube.style.opacity = "1";
        loadImmages();
    }
    counter++;
}
export function loadImmages() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
    }
}
export function galleryJs(): void {
    addScript('resources/js/gallery.js');

}
function addGlobalScript(ripSrc: string) {
    var x = document.createElement('script');
    x.src = ripSrc;
    document.getElementsByTagName("head")[0].appendChild(x);
}

function addScript(ripSrc: string) {
    var x = document.createElement('script');
    x.src = 'assets/' + ripSrc;
    document.getElementsByTagName("head")[0].appendChild(x);
}

function removeScripts() {
    var y = document.getElementsByTagName('head')[0];
    var x = y.getElementsByTagName('script');
    for (var i = 0; i < x.length; i++) {
        y.removeChild(x[i]);
    }
}






/*---------------------- */
import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
    return slideToLeft();
}

export function slideToLeft() {
    return trigger('routerTransition', [
        state('*', style({ position: 'relative', width: '100%' })),
        state('void', style({ position: 'relative', width: '100%' })),

        transition(":enter", [
            style({ opacity: 0 }),
            animate('0s', style({ opacity: 1 }))
        ]),
        transition(":leave", [
            animate('0s', style({ opacity: 0 }))
        ])
    ]
    );
}