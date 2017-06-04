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

//modal windows
var estimate = document.querySelector('.page-header__offer-btn');
var popupEstimate = document.querySelector('.modal-estimate');
var overlay = document.querySelector('.overlay');
var closeEstimate = document.querySelector('.modal-estimate__close');


estimate.addEventListener('click', function(event) {
  event.preventDefault();
  popupEstimate.classList.add('modal-estimate--show');
  overlay.classList.add('overlay--show');
});

closeEstimate.addEventListener('click', function(event) {
  event.preventDefault();
  popupEstimate.classList.remove('modal-estimate--show');
  overlay.classList.remove('overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popupEstimate.classList.contains('modal-estimate--show')) {
      popupEstimate.classList.remove('modal-estimate--show');
      overlay.classList.remove('overlay--show');
      }
    }
});


var order = document.querySelectorAll('.ready-product__order-btn');
var popupOrder = document.querySelector('.modal-order');
var closeOrder = document.querySelector('.modal-order__close');


if (order !== null) {
  for (var i = 0; i < order.length; i++) {
    order[i].addEventListener('click', function (event) {
      event.preventDefault();
      popupOrder.classList.add('modal-order--show');
      overlay.classList.add('overlay--show');
    });
  }
}

closeOrder.addEventListener('click', function(event) {
  event.preventDefault();
  popupOrder.classList.remove('modal-order--show');
  overlay.classList.remove('overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popupOrder.classList.contains('modal-order--show')) {
      popupOrder.classList.remove('modal-order--show');
      overlay.classList.remove('overlay--show');
      }
    }
});


var consultation = document.querySelectorAll('.product__btn');
var popupConsultation = document.querySelector('.modal-consultation');
var closeConsultation = document.querySelector('.modal-consultation__close');


if (consultation !== null) {
  for (var i = 0; i < consultation.length; i++) {
    consultation[i].addEventListener('click', function (event) {
      event.preventDefault();
      popupConsultation.classList.add('modal-consultation--show');
      overlay.classList.add('overlay--show');
    });
  }
}

closeConsultation.addEventListener('click', function(event) {
  event.preventDefault();
  popupConsultation.classList.remove('modal-consultation--show');
  overlay.classList.remove('overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popupConsultation.classList.contains('modal-consultation--show')) {
      popupConsultation.classList.remove('modal-consultation--show');
      overlay.classList.remove('overlay--show');
      }
    }
});


var help = document.querySelector('.products__btn');
var popupHelp = document.querySelector('.modal-help');
var closeHelp = document.querySelector('.modal-help__close');


help.addEventListener('click', function(event) {
  event.preventDefault();
  popupHelp.classList.add('modal-help--show');
  overlay.classList.add('overlay--show');
});

closeHelp.addEventListener('click', function(event) {
  event.preventDefault();
  popupHelp.classList.remove('modal-help--show');
  overlay.classList.remove('overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popupHelp.classList.contains('modal-help--show')) {
      popupHelp.classList.remove('modal-help--show');
      overlay.classList.remove('overlay--show');
      }
    }
});


var detailsHome = document.querySelector('.ready-product__btn-details--home');
var popupHome = document.querySelector('.modal-details--home');
var closeHome = document.querySelector('.modal-details__close--home');


detailsHome.addEventListener('click', function(event) {
  event.preventDefault();
  popupHome.classList.add('modal-details--show');
  overlay.classList.add('overlay--show');
});

closeHome.addEventListener('click', function(event) {
  event.preventDefault();
  popupHome.classList.remove('modal-details--show');
  overlay.classList.remove('overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popupHome.classList.contains('modal-details--show')) {
      popupHome.classList.remove('modal-details--show');
      overlay.classList.remove('overlay--show');
    }
  }
});


var detailsDacha = document.querySelector('.ready-product__btn-details--dacha');
var popupDacha = document.querySelector('.modal-details--dacha');
var closeDacha = document.querySelector('.modal-details__close--dacha');


detailsDacha.addEventListener('click', function(event) {
  event.preventDefault();
  popupDacha.classList.add('modal-details--show');
  overlay.classList.add('overlay--show');
});

closeDacha.addEventListener('click', function(event) {
  event.preventDefault();
  popupDacha.classList.remove('modal-details--show');
  overlay.classList.remove('overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popupDacha.classList.contains('modal-details--show')) {
      popupDacha.classList.remove('modal-details--show');
      overlay.classList.remove('overlay--show');
      }
    }
});


var detailsCottage = document.querySelector('.ready-product__btn-details--cottage');
var popupCottage = document.querySelector('.modal-details--cottage');
var closeCottage = document.querySelector('.modal-details__close--cottage');


detailsCottage.addEventListener('click', function(event) {
  event.preventDefault();
  popupCottage.classList.add('modal-details--show');
  overlay.classList.add('overlay--show');
});

closeCottage.addEventListener('click', function(event) {
  event.preventDefault();
  popupCottage.classList.remove('modal-details--show');
  overlay.classList.remove('overlay--show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode == 27) {
    if (popupCottage.classList.contains('modal-details--show')) {
      popupCottage.classList.remove('modal-details--show');
      overlay.classList.remove('overlay--show');
      }
    }
});


//sliders
var gallerySwiper = new Swiper('.gallery__inner', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });


var reviewsSwiper = new Swiper('.reviews__inner', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });

var certificationSwiper = new Swiper('.certification__list-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        centeredSlides: true,
        loop: true
    });

//popup for img
$(document).ready(function() {
  $('.reviews__img-item').magnificPopup({
    type:'image'
  });
});

$('.gallery__img-item').magnificPopup({
  type:'image'
});

$('.certification__item-img').magnificPopup({
  type:'image'
});

$('.results__items').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{enabled:true}
});


//scroll
$("a.scrollto").click(function() {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false
});

//tabs
$(document).ready(function() {
    $('.products__tabs-item').click(function(event) {
        event.preventDefault();
        $(this).addClass('products__tabs-item--active');
        $(this).siblings().removeClass('products__tabs-item--active');
        var tab = $(this).attr('href');
        $(".products__slide").not(tab).css('display', 'none');
        $(tab).fadeIn();
    });});

//tel mask
jQuery(function($){
   $('#tel-estimate').mask('+7(999) 999-9999');
   $('#tel-application').mask('+7(999) 999-9999');
   $('#tel-details-home').mask('+7(999) 999-9999');
   $('#tel-details-dacha').mask('+7(999) 999-9999');
   $('#tel-details-cottage').mask('+7(999) 999-9999');
   $('#tel-order').mask('+7(999) 999-9999');
   $('#tel-modal-consultation').mask('+7(999) 999-9999');
   $('#tel-help').mask('+7(999) 999-9999');
   $('#tel-consultation').mask('+7(999) 999-9999');
   });


function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

//counter-сlock
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.counter__clock-days');
  var hoursSpan = clock.querySelector('.counter__clock-hours');
  var minutesSpan = clock.querySelector('.counter__clock-minutes');
  var secondsSpan = clock.querySelector('.counter__clock-seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 25 * 24 * 60 * 60 * 1000);
initializeClock('counter', deadline);
