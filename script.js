
setInterval(function() {
  $("*").css("background-color","white");
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  timechecker(s, "seconds")
  timechecker(m, "minutes")
  timechecker(h, "hours")

}, 1000)

function timechecker(y, type) {
  if (y < 10) {
    timelight(y, type + "1");
  } else if (y > 10) {
    var sec = y.toString().split("");
    var Fsec = parseInt(sec[0]);
    var Ssec = parseInt(sec[1]);
    timelight(Fsec, type + "2");
    timelight(Ssec, type + "1");
  }
}

function timelight(v, type) {

  switch (v) {
    case 1:
      light(1, type);
      break;
    case 2:
      light(2, type);
      break;

    case 3:
      light(1, type);
      light(2, type);
      break;
    case 4:
      light(4, type);
      break;
    case 5:
      light(1, type);
      light(4, type);
      break;
    case 6:
      light(2, type);
      light(4, type);
      break;
    case 7:
      light(1, type);
      light(2, type);
      light(4, type);
      break;
    case 8:
      light(8, type);
      break;
    case 9:
      light(1, type);
      light(8, type);
      break;
  }
}

function light(x, kind) {
  var  k = x.toString();
  switch (kind) {
    case "seconds1":
        $("#s1" + x).css("background-color","red");
      break;
    case "seconds2":
      $("#s2" + x).css("background-color","red");
      break;
    case "minutes1":
      $("#m1" +x+"").css("background-color","red");
      break;
    case "minutes2":
      $("#m2"+x+"").css("background-color","red");
      break;
    case "hours1":
      $("#h1" + x+"").css("background-color","red");
      break;
    case "hours2":
      $("#h2" + x+"").css("background-color","red");
      break;
    default:

  }
}
