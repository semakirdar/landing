$(function () {
    feather.replace();
});

$(function () {
    $('.course-slider').owlCarousel({
        loop: true,
        margin: 10,
        items: 4,
        dots:false,
        nav:true

    })
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


