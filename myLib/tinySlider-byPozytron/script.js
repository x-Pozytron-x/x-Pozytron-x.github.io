function tinySlider(options){
    var slider   = document.querySelector('#tinySlider');
    var sliderWrap  = slider.querySelector('.sliderWrap');
    var arrLeft  = slider.querySelector('.arrLeft');
    var arrRight = slider.querySelector('.arrRight');
    var items    = slider.getElementsByClassName('slideItem');
    var currentMarginLeft = 0;
    var currentItem = 0;
    
    slider.style.height = options.height + 'px'; 
    slider.style.width = options.width + 'px';  
    sliderWrap.style.height = options.height + 'px';
    sliderWrap.style.width = options.width * items.length  + 'px';
    arrRight.style.display = 'none';
    
    items[0].classList.add('active');
    
    
    if(options.arrows == '0') {
         noArrows(); 
    } 
    if(options.autoscroll == '1') {
        setInterval(function(){
            slideLeft();  
            return currentMarginLeft;
        }, 4000); 
    }
    arrLeft.onclick  = function () { 
        slideLeft();  
        return currentMarginLeft;
    } 
    arrRight.onclick  = function () { 
        slideRight();  
        return currentMarginLeft;
    }
    
    function noArrows() {
       arrRight.style.display = 'none';
       arrLeft.style.display = 'none';
    } 
    
    function slideLeft () {
        var activeItem  = slider.querySelector('.active');
        activeItem.classList.remove('active');
        currentItem++;
        if(currentItem == items.length) {
            items[0].classList.add('active');
            currentMarginLeft = 0;
            currentItem = 0;
            sliderWrap.style.marginLeft = currentMarginLeft;
        } else {
            newMarginLeft = parseInt(currentMarginLeft) - options.width + 'px';   
            sliderWrap.style.marginLeft = newMarginLeft; 
            currentMarginLeft = newMarginLeft; 
        }
        items[currentItem].classList.add('active');
        
        if(options.arrows == '0') {
            noArrows();
        } else {
            arrRight.style.display = 'block';
            if (currentMarginLeft == (options.width * (items.length - 1) * -1 + 'px')) {
                arrLeft.style.display = 'none';
            }
        }
        return currentMarginLeft;
    }
    function slideRight () { 
        
        var activeItem  = slider.querySelector('.active');
        activeItem.classList.remove('active');
        currentItem--;
        if(currentItem < 0) {
            var last = items.length - 1;
            items[last].classList.add('active');
            currentMarginLeft = options.width * items.length + 'px';
            currentItem = items[last];
            sliderWrap.style.marginLeft = currentMarginLeft;
        } else {
            newMarginLeft = parseInt(currentMarginLeft) + options.width + 'px';   
            sliderWrap.style.marginLeft = newMarginLeft;
            currentMarginLeft = newMarginLeft; 
        }
        items[currentItem].classList.add('active');
        
        if(options.arrows == '0') {
            noArrows();
        } else {
            arrLeft.style.display = 'block';
            if (currentMarginLeft == '0px') {
                arrRight.style.display = 'none';
            }
        }
        return currentMarginLeft;
    }
}
