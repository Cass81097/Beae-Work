let targetDiv = document.getElementById('beae-elements__lightbox-content-beae-b672b73q');
if (targetDiv) {
    var htmlContent = '<img src="//vibrastrada.com/cdn/shop/products/7703390559_2048x2048.jpg?v=1707582212" class="beae-image-default" alt="Trendy Men\'s Printed Shirt" width="453" height="318" sizes="705px" srcset="//vibrastrada.com/cdn/shop/products/7703390559.jpg?width=705 1x, //vibrastrada.com/cdn/shop/products/7703390559.jpg?width=1410 2x">';
    targetDiv.innerHTML = htmlContent;
}

$nav.off('click', '.swiper-slide').on('click', '.swiper-slide', function () {
    var index = $(this).index(); slide.slideTo(index);

});

var images = document.querySelectorAll('.beae-xadect4j');

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showImages() {
    images.forEach(function(image) {
        if (isInViewport(image)) {
            image.style.opacity = "1";
        }
    });
}

window.addEventListener('scroll', showImages);

showImages();
