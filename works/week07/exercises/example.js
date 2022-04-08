(function() {
  
    'use strict';
      
    //Declare variables
    var btn = document.getElementById('request');
    var bio = document.getElementById('bio');
    
    //Setting request
    var request = new XMLHttpRequest();
    
    //Track of the request
    request.onreadystatechange = function() {
      
      //State Ready
      if(request.readyState === 4) {
 
        //Request found
        if(request.status === 200) {

          //Load information
          bio.innerHTML = request.responseText;        
        } else {
          //Error
          bio.innerHTML = 'Check for error: ' +  request.status + ' ' + request.statusText;
        }
      }
    }
  
    //Path
    //request.open('Get', 'https://www.w3.org/TR/PNG/iso_8859-1.txt');
    request.open('Get', 'https://www.w3.org/TR/PNG/iso_8859-1.txt');
  
    //Local storage
    btn.addEventListener('click', function() {
      // hide the button
      this.style.display = 'none';
      // send the request
      request.send();
    });
    
  })();
  
  