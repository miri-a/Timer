// Time converter

function timeConverter(num) {
  let min = Math.floor(num / 60);
  let sec = num % 60;
  return min + ":" + sec;
}

// Change timer's name

function nameChange(name, inputName, input) {
  document.getElementById(name).innerHTML = document.getElementById(inputName).value;
  document.getElementById(input).value = "";
}

// Countdown code

function countdown(name, minutes, countdown, start, reset) {
  let seconds = document.getElementById(minutes).selectedIndex * 60;
  let interval = setInterval(function(){
    seconds--;
    document.getElementById(countdown).innerHTML = timeConverter(seconds);
        
    // Alert when ready
    
    if (seconds <= 0) {
    clearInterval(interval);
    document.getElementById(countdown).innerHTML = "00:00";
    alert(document.getElementById(name).innerHTML + " is ready!");
    };    
    
    // Reset button
    document.querySelector(reset).addEventListener('click', function() {
        clearInterval(interval);
        document.getElementById(countdown).innerHTML = "00:00";
    });
  }, 1000);
};

// Objects

/*

var objTimer2 = new TimerObj('name-2', 'input-name-2', 'minutes-2', 'countdown-2', '#start-2', '#reset-2')

function TimerObj(name, inputName, minutes, countdown, start, reset) {
  this.name = name;
  this.inputName = inputName;
  this.minutes = minutes;
  this.countdown = countdown;
  this.start = start;
  this.reset = reset;
}

TimerObj.prototype.nameChange2 = function() {
  document.getElementById(this.name).innerHTML = document.getElementById(this.inputName).value;
  document.getElementById(this.inputName).value = "";
}

*/ // End of objects

/* document.querySelector('#start-2').addEventListener('click', */
/*TimerObj.prototype.start2 = function() {
  var seconds = document.getElementById(this.minutes).selectedIndex * 60;

  var interval = setInterval(function(){
    seconds--;
    document.getElementById(this.countdown).innerHTML = timeConverter(seconds);
        
    if (seconds <= 0) {
    clearInterval(interval);
    document.getElementById(this.countdown).innerHTML = "00:00";
    alert(document.getElementById(this.name).innerHTML + " is ready!");
    };    
    
  // Reset button
    
    document.querySelector('#reset-2').addEventListener('click', function() {
        clearInterval(interval);
        document.getElementById(this.countdown).innerHTML = "00:00";
    });
  }, 1000);
});
*/

/*
document.querySelector('#start-2').addEventListener('click', function() {
  var seconds = document.getElementById('minutes-2').selectedIndex * 60;
  

  var interval = setInterval(function(){
    seconds--;
    document.getElementById('countdown-2').innerHTML = timeConverter(seconds);
        
    if (seconds <= 0) {
    clearInterval(interval);
    document.getElementById('countdown-2').innerHTML = "00:00";
    alert(document.getElementById('name-2').innerHTML + " is ready!");
    };    
  // Reset button
    
    document.querySelector('#reset-2').addEventListener('click', function() {
        clearInterval(interval);
        document.getElementById('countdown-2').innerHTML = "00:00";
    });
  }, 1000);
});
*/
/*
var min2 = {
  name: document.getElementById('name-2'),
  inputName: document.getElementById('input-name-2'),
  minutes: document.getElementById('minutes-2'),
  countdown: document.getElementById('countdown-2'),
  start: document.querySelector('#start-2'),
  reset: document.querySelector('#reset-2')
};

var name = min1.name;
var inputName
var start
var minutes
var countdown
var reset
*/

// Working code

// Change minetnik's name





// Countdown
  // Start button 

/*document.querySelector('#start-1').addEventListener('click', function() {
  var seconds = document.getElementById('minutes-1').selectedIndex * 60;
  

  var interval = setInterval(function(){
    seconds--;
    document.getElementById('countdown-1').innerHTML = timeConverter(seconds);
        
    if (seconds <= 0) {
    clearInterval(interval);
    document.getElementById('countdown-1').innerHTML = "00:00";
    alert(document.getElementById('name-1').innerHTML + " is ready!");
    };    
    
  // Reset button
    
    document.querySelector('#reset-1').addEventListener('click', function() {
        clearInterval(interval);
        document.getElementById('countdown-1').innerHTML = "00:00";
    });
  }, 1000);
});

*/


/*

function countdown() {
  var seconds = document.getElementById('minutes-1').selectedIndex;
  var interval = setInterval(function(){
    seconds--;
    console.log(seconds);
        
    if (seconds <= 0) {
    clearInterval(interval);
    alert(document.getElementById('name-1').innerHTML + " is ready!");
  };

*/




/*
  if (s == 0) {
    clearInterval(interval);
    alert("x");
  };
*/
/*
function setTimer(mins) {
  for (var i = mins; i > 0; i--) {
    setTimeout(function(){
      console.log([i]); 
    }, 1000 * i);
  };
};
*/

/*
function setTimer() {
  var now = new Date();
  var setDate = new Date() + ;
}
*/
