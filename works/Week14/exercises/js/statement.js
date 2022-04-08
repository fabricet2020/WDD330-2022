const register = function (event) {
    // Receive user input
    let r_name = document.querySelector("#first_name").value;
    let r_lname = document.querySelector("#lname").value;
    let r_idno = document.querySelector("#idno").value;
    let r_address = document.querySelector("#address").value;

    let r_name2 = document.querySelector("#name2").value;
    let r_lname2 = document.querySelector("#lname2").value;
    let r_idno2 = document.querySelector("#idno2").value;
    let r_address2 = document.querySelector("#address2").value;

    // Output on page
    display_name.innerHTML = 'Full Name: ' + r_name;
    display_lname.innerHTML = 'Last Name: ' + r_lname;
    display_idno.innerHTML = 'ID/Passwport: ' + r_idno;
    display_address.innerHTML = 'Physical Address: ' + r_address; 

    display_name2.innerHTML = 'Full Name: ' + r_name2;
    display_lname2.innerHTML = 'Last Name: ' + r_lname2;
    display_idno2.innerHTML = 'ID/Passwport: ' + r_idno2;
    display_address2.innerHTML = 'Physical Address: ' + r_address2;     
    event.preventDefault();
  }; 