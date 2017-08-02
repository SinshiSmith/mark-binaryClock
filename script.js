setInterval(function() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  function dec2bin(dec) {
    return dec.toString(2);
  };


  if (s < 10) {
    timelight(s);
    console.log(s);
  }
  else if (s > 10) {
    var sec = s.toString().split("");
    var Fsec = parseInt(sec[0]);
    var Ssec = parseInt(sec[1]);
    timelight(Fsec);
    timelight(Ssec);
    console.log(s);
  }
}, 1000)


function light(x) {
  console.log(x + " is lighted");
}

function timelight(v) {
  switch (v) {
    case 1:
      light(1);
      break;
    case 2:
      light(2);
      break;

    case 3:
      light(1);
      light(2);
      break;
    case 4:
      light(3);
      break;
    case 5:
      light(1);
      light(3);
      break;
    case 6:
      light(2);
      light(4);
      break;
    case 7:
      light(1);
      light(2);
      light(3);
      break;
    case 8:
      light(4);
      break;
    case 9:
      light(1);
      light(4);
      break;
  }
}
