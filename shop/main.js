$(function () {
    $('.partners-slider').owlCarousel({
        loop: true,
        margin: 10,
        items: 6
    });

    $('.banner-slider').owlCarousel({
        loop: true,
        margin: 10,
        items: 1
    });

    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    })
});