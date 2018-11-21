function myRange(arr, text) {
  var range = document.getElementById('myRange');

  var spanT = document.querySelectorAll('.topNum span');
  var spanB = document.querySelectorAll('.bottomNum span');

  setDot(spanT);
  setDot(spanB);

  function setDot(span) {
    var length = Object.keys(arr).length / 2;
    for (var i = 0; length > i; i++) {
      var dot = document.createElement("i");
      dot.innerHTML = '';
      span[i].appendChild(dot);
    }
  }

  changeTarrif(arr, range);
  range.onchange = function() {
    changeTarrif(arr, range);
  }
  // console.log(Object.keys(arr).length);
}

function changeTarrif(arr, range) {
  var slider = document.querySelector('.slidecontainer');
  var resMBS = document.querySelector('.slidecontainer .tarrif #mbs');
  var resPRICE = document.querySelector('.slidecontainer .tarrif #price');
  var current = slider.querySelector('.current');
  var mbs = range.value;

  resMBS.innerHTML = mbs;
  resPRICE.innerHTML = arr[mbs];
  current.style.left = mbs + '%';
  current.style.marginLeft = 35 * mbs / -100 + 'px';
  current.innerHTML = mbs;
  range.style.background = 'linear-gradient(to right, #ace8ff ' + mbs + '%, #ffffff ' + mbs + '%)';
}
