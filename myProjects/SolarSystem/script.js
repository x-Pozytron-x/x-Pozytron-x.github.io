window.onload = function () {

    // create objects
        starSystem = {
            size: '100',
            position: 'fixed',
            bgColor: 'black',
						z_index: 1
        };
		star = {
			position: 'absolute',
			size: 30,
			place: '50%',
			bgColor: 'yellow',
			z_index: 2
		};
        planet = {
            size: 4,
            position: 'absolute',
            bgColor: 'lightblue',
            R: 150,
			z_index: 2
        }; 
    
        solarSystem = document.getElementById('space'); 
		sun = document.getElementById('sun');
        earth = document.getElementById('earth');
        mars = document.getElementById('mars');
				
        
    // set styles to objects    
        solarSystem.style.position = starSystem.position;
        solarSystem.style.height = starSystem.size + 'vh';
        solarSystem.style.width = starSystem.size + 'vw';
        solarSystem.style.backgroundColor = starSystem.bgColor; 
		solarSystem.style.zIndex = starSystem.z_index;
        
		sun.style.position = star.position;
		sun.style.top = star.place;
		sun.style.left = star.place;
		sun.style.marginTop = star.size / -2;
		sun.style.marginLeft = star.size / -2;
        sun.style.height = star.size + 'px';
        sun.style.width = star.size + 'px';
        sun.style.borderRadius = star.size + 'px'; 
        sun.style.backgroundColor = star.bgColor; 
		sun.style.zIndex = star.z_index;
				
        earth.style.position = planet.position;
        earth.style.height = planet.size + 'px';
        earth.style.width = planet.size + 'px';
        earth.style.borderRadius = planet.size + 'px'; 
        earth.style.backgroundColor = planet.bgColor; 
        earth.style.top = star.place;
		earth.style.left = star.place;
		earth.style.marginTop = planet.size / -2;
		earth.style.marginLeft = planet.size / -2;
		earth.style.zIndex = planet.z_index;
		earthR = planet.R;
		
		mars.style.position = planet.position;
        mars.style.height = planet.size*0.75 + 'px';
        mars.style.width = planet.size*0.75 + 'px';
        mars.style.borderRadius = planet.size*0.75  + 'px'; 
        mars.style.backgroundColor = 'red'; 
        mars.style.top = star.place;
		mars.style.left = star.place;
		mars.style.marginTop = planet.size*0.75 / -2;
		mars.style.marginLeft = planet.size*0.75 / -2;
		mars.style.zIndex = planet.z_index;
		marsR = planet.R*1.5193;


var btn = document.getElementById('start'); 
var date = document.getElementById('date'); 
var coor = document.getElementById('coor'); 

 
var fiEarth = Math.PI*1.5;
var fiMars = Math.PI*1.5;
var k = 1.01;
var xEarth = earthR*Math.cos(fiEarth);
var yErath = k*earthR*Math.sin(fiEarth); 
earth.style.marginLeft = xEarth + 'px';
earth.style.marginTop  = yErath + 'px';

var xMars = marsR*Math.cos(fiMars);
var yMars = k*marsR*Math.sin(fiMars); 
mars.style.marginLeft = xMars + 'px';
mars.style.marginTop  = yMars + 'px';

coor.innerHTML = 'Earth y: (' + yErath + '),<br> Earth x: ' + xEarth+ ') <br> Mars y: (' + yMars + '),<br> Mars x: (' + xMars + ')';

var frameDuration = 1000 / 40; 
btn.onclick = function(){
    start = new Date();
  if (btn.classList.contains("active")) {
    btn.classList.remove('active');
    clearInterval(timerId);
  } else {
    btn.classList.add('active');
    timerId =  setInterval(move, frameDuration);
  }
};



function move() {
    fiEarth = fiEarth + 0.01;
    fiMars = fiMars + (0.01 / 1.88219);
    var xEarth = earthR*Math.cos(fiEarth);
    var yErath = k*earthR*Math.sin(fiEarth); 
    earth.style.marginLeft = xEarth + 'px';
    earth.style.marginTop  = yErath + 'px';
    
    var xMars = marsR*Math.cos(fiMars);
    var yMars = k*marsR*Math.sin(fiMars); 
    mars.style.marginLeft = xMars + 'px';
    mars.style.marginTop  = yMars + 'px';
    
    coor.innerHTML = 'Earth y: (' + yErath + '),<br> Earth x: ' + xEarth+ ') <br> Mars y: (' + yMars + '),<br> Mars x: (' + xMars + ')';
    newDATE = new Date();  
    elapsed = new Date().getTime() - start;
    date.innerHTML = elapsed / 1000;
}

}