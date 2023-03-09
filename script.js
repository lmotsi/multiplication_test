const x_values = [];
const y_values = [];

for (let i = 0; i < 10; i++) {
    x_values[i] = Math.floor(Math.random() * 12) + 1 ;
    y_values[i] = Math.floor(Math.random() * 12) + 1 ;
}  
console.log(x_values)
console.log(y_values)

total = 0;

function change(x,y) {
    userAnswer = parseInt(document.getElementById("answer").innerText)
    px = parseInt(document.getElementById("num1").innerText)
    py = parseInt(document.getElementById("num2").innerText)
    if (userAnswer == px*py) {
      total += 1
      console.log("Correct")
    }
    document.getElementById("num1").innerText = x;
    document.getElementById("num2").innerText = y;
    document.getElementById("answer").innerText = "";
    document.getElementById("answer").focus()
}

count = 0;

function changeText() {
    // Set the text of the div to the current value in the textValues array
    change(x_values[count],y_values[count])
  
    // Increment the counter
    count++;
  
    // If we've gone through all of the text values, reset the counter to 0
    if (count = 10) {
      count = 0;
    }
}
  
// // Call the changeText function every 5 seconds
// var intervalId = setInterval(changeText, 5000);
  
// // Stop the interval after 10 cycles
// setTimeout(function() { clearInterval(intervalId);}, 10000);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function go() {
  for (let j = 0; j < 10; j++) {
    changeText()
    await sleep(5000); // wait for 1 second
    console.log("here")
  }
}

go()
