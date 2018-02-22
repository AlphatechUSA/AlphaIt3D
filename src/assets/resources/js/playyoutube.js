var manage_services;
var inovation_training;
var staffing_services;

function onYouTubeIframeAPIReady() {
    manage_services = new YT.Player('manage-services', {
        videoId: 'jZCbXTtFlEM',
        playerVars: {
            controls: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    inovation_training = new YT.Player('inovation-training', {
        videoId: 'pyzHfYndJOw',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
        }
    });
    staffing_services = new YT.Player('staffing-services', {
        videoId: 'KlaA2diw2kQ',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

}
//   4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    setTimeout(function () {
        manage_services.playVideo();
        manage_services.mute();

        inovation_training.playVideo();
        inovation_training.mute();

        staffing_services.playVideo();
        staffing_services.mute();

    }, 15000);

}
function onPlayerStateChange(event) {
    //                alert('State Changed');
}
function stopVideo() {
    player.stopVideo();
}
