$('.slider-nav').slick({
    arrows: false,
    slidesToShow: 2.65,
    slidesToScroll: 1,
    dots: true,
    adaptiveHeight: true,
    // centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1,
                // centerMode: true,
                // focusOnSelect: true,
                // centerPadding: '100px'
                infinite: false
            }
        }
        ]
});

