function easySlider(options){
    var slider   = document.querySelector('#slider');
    var sliderWrap  = slider.querySelector('.sliderWrap');
    var arrLeft  = slider.querySelector('.arrLeft');
    var arrRight = slider.querySelector('.arrRight');
    var items    = slider.getElementsByClassName('slideItem');
    var currentMarginLeft = 0;

    slider.style.height = options.height + options.units; 
    slider.style.width = options.width + options.units;  
    sliderWrap.style.height = options.height + options.units;
    sliderWrap.style.width = options.width * items.length  + options.units;

    arrRight.style.display = 'none';
    
    arrLeft.onclick  = function () { 
        slideLeft();  
        return currentMarginLeft;
    } 
    arrRight.onclick  = function () { 
        slideRight();  
        return currentMarginLeft;
    }
    function slideLeft () {
        arrRight.style.display = 'block';
        newMarginLeft = parseInt(currentMarginLeft) - options.width + options.units;   
        sliderWrap.style.marginLeft = newMarginLeft; 
        currentMarginLeft = newMarginLeft; 
        if (currentMarginLeft == (options.width * (items.length - 1) * -1 + options.units)) {
            arrLeft.style.display = 'none';
        }
        return currentMarginLeft;
    }
    function slideRight () { 
        arrLeft.style.display = 'block';
        newMarginLeft = parseInt(currentMarginLeft) + options.width + options.units;   
        sliderWrap.style.marginLeft = newMarginLeft;
        currentMarginLeft = parseInt(newMarginLeft); 
        if (currentMarginLeft == '0') {
            arrRight.style.display = 'none';
        } else {
            currentMarginLeft = currentMarginLeft + options.units;
        }
        return currentMarginLeft;
    }
}