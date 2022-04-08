const register = function (event) {
    // Receive user input
    let r_name = document.querySelector("#name").value;
    let r_address = document.querySelector("#address").value;
    // Output on page
    display_name.innerHTML = 'Full Name: ' + r_name;
    display_address.innerHTML = 'Physical Address: ' + r_address; 
    event.preventDefault();
  }; 