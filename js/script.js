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