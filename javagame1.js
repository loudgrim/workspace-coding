function player1(event) {
    var x = event.key;

    if (x == 7 ) {
      document.getElementById("7").innerHTML = "X";
    } else if (x == 8 ) {
      document.getElementById("8").innerHTML = "X";
    } else if (x == 9) {
      document.getElementById("9").innerHTML = "X";
    } else if (x == 4) {
      document.getElementById("4").innerHTML = "X";
    } else if (x == 5) {
      document.getElementById("5").innerHTML = "X";
    } else if (x == 6) {
      document.getElementById("6").innerHTML = "X";
    } else if (x == 1) {
      document.getElementById("1").innerHTML = "X";
    } else if (x == 2) {
      document.getElementById("2").innerHTML = "X";
    } else if (x == 3) {
      document.getElementById("3").innerHTML = "X";
    }
  }  

  function restartbutton() {
    document.getElementById("7").innerHTML ="";
    document.getElementById("8").innerHTML ="";
    document.getElementById("9").innerHTML ="";
    document.getElementById("4").innerHTML ="";
    document.getElementById("5").innerHTML ="";
    document.getElementById("6").innerHTML ="";
    document.getElementById("1").innerHTML ="";
    document.getElementById("2").innerHTML ="";
    document.getElementById("3").innerHTML ="";
  }