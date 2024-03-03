
let form = document.getElementById("signupForm")
const success = document.querySelector(".success")
form.addEventListener("submit",popUps)

function popUps(eventDetails){
    let emailError = document.getElementById("emailError").textContent;
    let passwordError = document.getElementById("passwordError").textContent;

    eventDetails.preventDefault();
    
    if(confirm("Are you sure you want to sign up?")){
    alert("Successful signup!")
    }

else{
    window.location.href = window.location.href;
    emailValue = "";
    passValue = "";
}
}




const email = document.getElementById("email")

email.addEventListener("input", emailValidation)

function emailValidation(){
    let emailValue = email.value;
    let emailError = document.getElementById("emailError")
    if(emailValue.length<3 || !emailValue.includes("@") || !emailValue.includes(".")){
        emailError.textContent = "Email is invalid.";
        success.textContent = "";
    }
    else{
        emailError.textContent = "";
        // success.textContent = "All good to go"
    }
    
}

const password = document.getElementById("password")

password.addEventListener("input", passwordValidation)

function passwordValidation(){
    let passValue = password.value;
    let passwordError = document.getElementById("passwordError")

        if(passValue.length<8){
            passwordError.textContent = "Password must be at least 8 characters long."
            success.textContent = "";
        }
        else{
            passwordError.textContent = "";

            if (email.value.length >= 3 && email.value.includes("@") && email.value.includes(".")) {
                success.textContent = "All good to go";
            } else {
                success.textContent = "";
            }
            // success.textContent = "All good to go"
        }
        
}


