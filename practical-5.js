let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000; 
// Countdown timer 
let x = setInterval(function () { 
// Get the current date and time in milliseconds 
let now = new Date().getTime(); 
// Find the interval between now and the countdown time 
let timeLeft = countDownDate - now; 
// Time calculations for days, hours, minutes, and seconds 
const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); 
const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24); 
const minutes = Math.floor((timeLeft / (1000 * 60)) % 60); 
const seconds = Math.floor((timeLeft / 1000) % 60); 
// Display the result 
console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s"); 
// Clear the countdown when complete 
if (timeLeft < 0) { 
clearInterval(x); 
console.log('Countdown Finished'); 
}},  
1000);