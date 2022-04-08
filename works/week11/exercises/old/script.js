function show() {
    //Get text from the field by creating variables
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const idno = document.getElementById("idno").value;

    //Output the text by assigning values to the variables
    document.getElementById("show").innerHTML = 'First Name: ' + fname;
    document.getElementById("show").innerHTML = 'Last Name: ' + lname;
    document.getElementById("show").innerHTML = 'ID/Passport: ' + idno;
  }

 
 