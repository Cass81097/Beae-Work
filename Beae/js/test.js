let targetDiv = document.getElementById('beae-elements__lightbox-content-beae-b672b73q');
if (targetDiv) {
    var htmlContent = '<img src="//vibrastrada.com/cdn/shop/products/7703390559_2048x2048.jpg?v=1707582212" class="beae-image-default" alt="Trendy Men\'s Printed Shirt" width="453" height="318" sizes="705px" srcset="//vibrastrada.com/cdn/shop/products/7703390559.jpg?width=705 1x, //vibrastrada.com/cdn/shop/products/7703390559.jpg?width=1410 2x">';
    targetDiv.innerHTML = htmlContent;
}

$nav.off('click', '.swiper-slide').on('click', '.swiper-slide', function () {
    var index = $(this).index(); slide.slideTo(index);

});


