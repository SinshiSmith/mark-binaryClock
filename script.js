setInterval(function() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  function dec2bin(dec) {
    return dec.toString(2);
  };
  var sec = dec2bin(6).toString().split("");
  for (var i = sec.length - 1; i >= 0; i--) {
    if (sec[i] == 1)
      light(i+1);
  }
  console.log(sec);
}, 1000)


function light(x) {
  console.log(x + " is lighted");
}
