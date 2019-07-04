var menu =
  '<li><a href="/">На главную</a></li>' +
  '<ul>' +
  '<li><a href="/myLib/tinySlider-byPozytron">TinySlider (by Pozytron) - легкий (3.14KB) и  простой слайдер без jquery</a></li>' +
  '<li><a href="/myLib/Color-Generator">Color-Generator</a></li>' +
  '<li><a href="/myLib/octagon">Шестиугольник средствами html+css</a></li>' +
  '<li><a href="/myLib/RangeSlider">Ползунок-(калькулятор) на bootstrap-js</a></li>' +
  '<li><a href="/myProjects/SolarSystem">Солнечная система v.0.2.1</a></li>' +
  '</ul>';
window.onload = function() {
  var ol = document.getElementById('ol');
  ol.innerHTML = menu;
}
