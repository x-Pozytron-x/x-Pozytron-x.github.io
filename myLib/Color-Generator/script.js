window.onload = function (){ 
    var paletra = document.querySelector('.paletra');
    var text = document.querySelector('.text'); 
    var i_red   = document.getElementById('red');
    var i_green = document.getElementById('green');
    var i_blue  = document.getElementById('blue');
    
    i_red.oninput   = f_getColor;  
    i_green.oninput   = f_getColor;  
    i_blue.oninput   = f_getColor;  

    function f_getColor() { 
        r = parseInt(i_red.value).toString(16);
        g = parseInt(i_green.value).toString(16);
        b = parseInt(i_blue.value).toString(16);
        if (r == 0 ) r = '00';
        if (g == 0 ) g = '00';
        if (b == 0 ) b = '00';
        
        var hex = '#' + r + g + b;
        
        f_setColor(hex);
    }


    function f_setColor(hex) {
        paletra.style.backgroundColor = hex;
        text.innerHTML = hex;
    }
    
}