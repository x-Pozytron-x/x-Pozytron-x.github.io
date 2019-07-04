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
  var mainFonts = document.querySelector('body');
  mainFonts.style.fontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
  mainFonts.style.margin = '0';
  mainFonts.style.fontWeight = '400'; 
  mainFonts.style.lineHeight = '1.5';
  ol.querySelectorAll('a').style.color = '#007bff';
  ol.querySelectorAll('a').style.textDecoration = 'none';
} 
