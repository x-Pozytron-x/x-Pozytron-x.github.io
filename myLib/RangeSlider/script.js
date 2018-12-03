$(document).ready(function() {
  $("#ex13").slider({
    min: 20,
    max: 90,
    ticks: [20, 30, 40, 50, 60, 70, 80, 90],
    ticks_labels: ['20', '30', '40', '50', '60', '70', '80', '90'],
    ticks_snap_bounds: 10,
    step: 10,
    value: 50
  });
  setHandle();
  $('#ex13').on('slideStop', function() { setHandle(); });

  function setHandle() {
    var handle = document.querySelector('.slider-handle');
    var input = document.getElementById('ex13');
    var currVal = input.value;
    handle.innerHTML = currVal;
    changeTarrif(currVal);
  }

  function changeTarrif(mbs) {
    var arr = {
      '20': 5000,
      '30': 6500,
      '40': 8000,
      '50': 9500,
      '60': 11000,
      '70': 12500,
      '80': 14000,
      '90': 15000
    }
    var text = mbs + ' Мбит/с - ' + arr[mbs] + '  ₽ в месяц';
    tarrif.innerHTML = text;
  }
})
