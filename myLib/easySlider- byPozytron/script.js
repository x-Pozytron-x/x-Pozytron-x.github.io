function easySlider(options){
    var slider   = document.querySelector('#slider');
    var sliderWrap  = slider.querySelector('.sliderWrap');
    var arrLeft  = slider.querySelector('.arrLeft');
    var arrRight = slider.querySelector('.arrRight');
    var items    = slider.getElementsByClassName('slideItem');
    var currentMarginLeft = 0;
    slider.style.height = options.height + 'px'; 
    slider.style.width = options.width + 'px';  
    sliderWrap.style.height = options.height + 'px';
    sliderWrap.style.width = options.width * items.length  + 'px';
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
        newMarginLeft = parseInt(currentMarginLeft) - options.width + 'px';   
        sliderWrap.style.marginLeft = newMarginLeft; 
        currentMarginLeft = newMarginLeft; 
        if (currentMarginLeft == (options.width * (items.length - 1) * -1 + 'px')) {
            arrLeft.style.display = 'none';
        }
        return currentMarginLeft;
    }
    function slideRight () { 
        arrLeft.style.display = 'block';
        newMarginLeft = parseInt(currentMarginLeft) + options.width + 'px';   
        sliderWrap.style.marginLeft = newMarginLeft;
        currentMarginLeft = newMarginLeft; 
        if (currentMarginLeft == '0px') {
            arrRight.style.display = 'none';
        }
        return currentMarginLeft;
    }
}
