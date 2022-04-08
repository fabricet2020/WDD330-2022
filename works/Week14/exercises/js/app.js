$(document).ready(() => {

//Button Event Listener
$('.swap button').on('click', swap);

//Fill Selects With Content
generateOptions();


// Generating Selects Content
function generateOptions() {

  //Disabling the second input
  $('#secondInp').prop( "disabled", true );

  fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
  .then(response => response.json())
  .then(data => {

    //Select Change Event
    $('#firstSel, #secondSel').change(function() {
    updateRequest();
    });

    //Input Change Events (Onchange + Keyup)
    $('#firstInp').bind('change keyup', function() {

    //If first input value is blank add 0.00 to the second input
    this.value != '' ? updateRequest() : $('#secondInp').val('0.00');

    })

  //Check Response
  console.log(data);
  console.log(data.rates);

  let defaultSelect1 = 'USD';
  let defaultSelect2 = 'ZAR';

  //Adding Currencies as Select Options + Sorting in Alphabetical Order (cause first one is USD)
  Object.keys(data.rates).sort().forEach(currency => {
  $('#firstSel').append(`<option value="${currency}" ${currency == defaultSelect1 ? 'selected' : ''}>${currency}</option>`);
  $('#secondSel').append(`<option value="${currency}" ${currency == defaultSelect2 ? 'selected' : ''}>${currency}</option>`);
  updateRequest();
  });


  })
  .catch(error => console.log(error));
}

//Make Another API Request While Changing First Select Values
function updateRequest() {

  $('#topCurrency').text($('#firstSel :selected').val());
  $('#bottomCurrency').text($('#secondSel :selected').val());


  fetch(`https://api.exchangerate-api.com/v4/latest/${$('#firstSel').val()}`)
  .then(response => response.json())
  .then(data => {
    Object.keys(data.rates).forEach(e => {
      if(e == $('#secondSel :selected').val()) {
      getSum(data.rates[e]);
      }
    });
  })
  .catch(err => console.log(err));

}

// Input 1 + Input 2 values
function getSum(rate) {
let calc = parseInt($('#firstInp').val()) * rate;
$('#remarks2').val( calc.toFixed(2) );
$('#secondInp').val( calc.toFixed(2) );
$('#rate').text(rate);
}


//Change Currencies Order
function swap() {

let currentVal1 = $('#firstSel :selected').text(); //USD
let currentVal2 = $('#secondSel :selected').text(); //EUR

$('#firstSel :selected').text(currentVal2).val(currentVal2);
$('#secondSel :selected').text(currentVal1).val(currentVal1);

updateRequest();
}


})