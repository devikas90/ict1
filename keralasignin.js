//Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
    
    // Validate name
    if(name == "") {
        
        printError("nameErr", "<span style='color:red'>Please enter your name</span>");
    
        
    } 
    else {
        var regex = /^[a-zA-Z\s]+$/; 

                
        if(regex.test(name) === false) {
            
            printError("nameErr", "<span style='color:red'>Please enter a valid name</span>");
            
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "<span style='color:red'>Please enter your email address</span>");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "<span style='color:red'>Please enter a valid email address</span");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "<span style='color:red'>Please enter your mobile number</span>");
    } else {
        /*var regex = /^[1-9]\d{9}$/;*/
        
        var regex =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if(regex.test(mobile) === false) {
            printError("mobileErr", "<span style='color:red'>Please enter a valid 10 digit mobile number</span>");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
     
/*function phonenumber(inputtxt)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((inputtxt.value.match(phoneno))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}*/

    // Validate country
    if(country == "Select") {
        printError("countryErr", "<span style='color:red'>Please select your country<span>");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "<span style='color:red'>Please select your gender</span>");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};
