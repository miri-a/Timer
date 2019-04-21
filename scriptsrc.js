var minutes1 = document.getElementById("minutes-1");
var minutes2 = document.getElementById("minutes-2");
var minutes3 = document.getElementById("minutes-3");

// Select option

for (var i = 0; i <= 59; i++) {
  let option = document.createElement("option");
  option.text = [i];
  option.value = [i];
  minutes1.appendChild(option);
};

for (var i = 0; i <= 59; i++) {
  let option = document.createElement("option");
  option.text = [i];
  option.value = [i];
  minutes2.appendChild(option);
};

for (var i = 0; i <= 59; i++) {
  let option = document.createElement("option");
  option.text = [i];
  option.value = [i];
  minutes3.appendChild(option);
};

// Time converter

function timeConverter(num) {
  let min = Math.floor(num / 60);
  let sec = num % 60;
  return min + ":" + sec;
}

// Change timer's name

function nameChange(name, inputName) {
  var name = document.getElementById(name);
  var inputName = document.getElementById(inputName);

  name.innerHTML = inputName.value;
  inputName.value = "";
}

// Countdown code

function countdown(name, minutes, countdown, start, reset) {
  let audio = document.getElementById("alarm");
  let seconds = document.getElementById(minutes).selectedIndex * 60;
  let interval = setInterval(function(){
    seconds--;
    document.getElementById(countdown).innerHTML = timeConverter(seconds);

    // Alert when ready

    if (seconds <= 0) {
    audio.play();
    clearInterval(interval);
    document.getElementById(countdown).innerHTML = "00:00";
    alert(document.getElementById(name).innerHTML + " is ready!");
    };

    // Change tab title

    document.getElementById("title").innerHTML = "(" + timeConverter(seconds) + ") Timer";

    // Reset button

    document.querySelector(reset).addEventListener('click', function() {
        clearInterval(interval);
        document.getElementById(countdown).innerHTML = "00:00";
    });
  }, 1000);
};
