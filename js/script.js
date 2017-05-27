//map

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
    center: [60.02350606407909,30.298611499999964],
    zoom: 16,
    controls: []
  });

  myMap.behaviors.disable('scrollZoom');

  myMap.controls.add('zoomControl', {
    position: {
      top: 15,
      left: 15
    }
  });

  var myPlacemark = new ymaps.Placemark(
    [60.02350606407909,30.298611499999964], {}, {
      iconLayout:  'default#image',
      iconImageHref: 'img/pin.png',
      iconImageSize: [37, 42],
      iconImageOffset: [-20, -47]
    });

  myMap.geoObjects.add(myPlacemark);
}

//modal-estimate
var estimate = document.querySelctor('.page-header__offer-btn');
var popup = document.querySelctor('.modal-estimate');
var close = document.querySelctor('.modal-estimate__close');

var form = popup.querySelector('form')


estimate.addEdventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal-estimate-show');
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-estimate-show');
  popup.classList.remove('modal-estimate-error');
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("modal-estimate-show")) {
      popup.classList.remove("modal-estimate-show");
      popup.classList.remove("modal-estimate-error");
    }
  }
});





//gallery-slider
var gallerySwiper = new Swiper('.gallery__inner', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });

//reviews-slider
var reviewsSwiper = new Swiper('.reviews__inner', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });

//certificaction-slider
var certificationSwiper = new Swiper('.certification__group', {
        nextButton: '.certification__btn--next',
        prevButton: '.certification__btn--prev',
        slidesPerView: 3,
        loop: true
    });
