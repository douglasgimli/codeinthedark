function resizeVideo() {
    if (($(window).width() / $(window).height()) < 1.8) {
        $('.fullscreen-bg__video').css({'height': '120%', 'width': 'auto', 'left': '50%', 'transform': 'translateX(-50%)'});
    }
    else {
        $('.fullscreen-bg__video').css({'height': 'auto', 'width': '100%', 'left': '0', 'transform': 'none'});
    }
}

$(document).ready(function(){
    resizeVideo();
    $(window).resize(resizeVideo);
});
