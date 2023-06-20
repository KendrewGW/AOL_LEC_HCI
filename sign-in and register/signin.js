document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault()
      const nama = document.getElementById("nama").value;
      const nim = document.getElementById("nim").value;
      const password = document.getElementById("password").value;
    
      // Perform validation checks
      if (nama == "") {
        alert("Please enter your name");
        return;
      }
      else if(nama.length < 5){
        alert("Name must be 5 characters or long")
        return;
      }
    
      if (nim == "") {
        alert("Please enter your NIM");
        return;
      } 
      else if(nim.length != 10){
        alert("NIM must be 10 digits");
        return;
      }
    
      if (password == "") {
        alert("Please enter your password");
        return;
      }
      else if(password.length < 8){
        alert("Password must be 8 characters long");
        return;
      }

      alert("Form submitted successfully");
      window.location.href= '/home/home.html'
    });


//Toggle Display Password