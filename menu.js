
var menu =  
    '<lh>Основы JavaScript</lh>' + 
    '<li><a href="u1.html">Привет, мир!</a></li>' +
    '<li><a href="u2.html">Переменные</a></li>' +
    '<li><a href="u3.html">Правильный выбор имени переменной</a></li>' +
    '<li><a href="u4.html">Основные операторы</a></li>' +
    '<li><a href="u5.html">Взаимодействие с пользователем</a></li>' +
    '<li><a href="u12.html">Условные операторы</a></li>' +
    '<li><a href="u13.html">Логические операторы</a></li>' +
    '<li><a href="u16.html">Конструкция switch</a></li>' +
    '<li><a href="u18.html">Функц. выраж.</a></li>';
window.onload = function (){
    var ol = document.getElementById('ol');
    ol.innerHTML = menu;
}
