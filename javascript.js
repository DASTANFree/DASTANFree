
// Set the date we're counting down to
var countDownDate = new Date(" 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
 
  
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
   
   
  // Time calculations for days, hours, minutes and seconds
  //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 5 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var milliseconds =Math.floor((distance % (1000 * 1)) / 100);

  
  //var ml = ;
  // console.log(ml );
   // 709   
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =   minutes + ":" + seconds+ "," +milliseconds ;
  
    
  // If the count down is over, write some text 
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 100);

var iin = prompt("Введите ваш ИИН: ");
var iin_org = prompt("Введите ИИН/БИН вашей организации: ");
var test = iin;
var test2 =iin_org;
document.getElementById("mytext").value = test;//Now you get the js variable inside your form element
document.getElementById("mytext2").value = test2;//Now you get the js variable inside your form element

