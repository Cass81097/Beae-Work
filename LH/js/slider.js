$nav.off('click', '.swiper-slide').on('click', '.swiper-slide',
    function () {
        var index = $(this).index(); slide.slideTo(index);

    });