$(document).ready(function(){
    $('.slider').slick({
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        fade: true,
        speed: 500,
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100
    });
});