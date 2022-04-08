function show() {
    //Get text from the field
    const text = document.getElementById("text_input").value;
    //Output the text
    document.getElementById("show").innerHTML = 'You entered: ' + text;
  }

 
function compute() {
    const input = document.getElementById('myNumber').value;
    //Convert input to Integer
    const inputInt = parseInt(input);

    const outputElement = document.getElementById('showItirated');
    
    if (inputInt !== NaN) {
        outputElement.innerHTML = 'total: ' + sum(inputInt);
    }
    }
    function sum(number) {  
    let addNumbers = 0;
    for (let i = 1; i <= number; i++) {
        addNumbers += i;
    }
    return addNumbers;
    }


  function addTwo() {
    const a = parseInt(document.getElementById("sum-a").value);
    const b = parseInt(document.getElementById("sum-b").value);
    const showElement = document.getElementById("result");
  
    if (!isNaN(a) && !isNaN(b)) {
        const total = a + b;
      showElement.innerText = 'Total computed is : ' +total;
    }
  }
  
  //Strech
  function addCal(){
      // store input numbers
    const num1 = parseFloat(document.getElementById("num_one").value);
    const num2 = parseFloat(document.getElementById("num_two").value);

    //add two numbers
    const total = num1 + num2;
    
    // display the sum
    document.getElementById("showCal").innerHTML = 'Answer: ' + total;
  }

  function subCal(){
    // store input numbers
  const num1 = parseFloat(document.getElementById("num_one").value);
  const num2 = parseFloat(document.getElementById("num_two").value);

  //add two numbers
  const total = num1 - num2;
  
  // display the sum
  document.getElementById("showCal").innerHTML = 'Answer: ' + total;
} 

function mulCal(){
    // store input numbers
  const num1 = parseFloat(document.getElementById("num_one").value);
  const num2 = parseFloat(document.getElementById("num_two").value);

  //add two numbers
  const total = num1 * num2;
  
  // display the sum
  document.getElementById("showCal").innerHTML = 'Answer: ' + total;
} 

function divCal(){
    // store input numbers
  const num1 = parseFloat(document.getElementById("num_one").value);
  const num2 = parseFloat(document.getElementById("num_two").value);

  //add two numbers
  const total = num1 / num2;
  
  // display the sum
  document.getElementById("showCal").innerHTML = 'Answer: ' + total;
}