
document.addEventListener('DOMContentLoaded', function() {

// Setup and Initial Code Structure

const form =document.getElementById('registration-form');
const feedbackDiv =document.getElementById('form-feedback');

// Form Submission and Event Prevention
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    // Input Retrieval and Trimming
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim() ;
    let password = document.getElementById('password').value.trim() ;


    // Validation Logic
    let isValid = true;
    let messages =[]

    if(username.length < 3 ){
        isValid = false;
        messages.push('UserName has to be > 3digits  ')
    }

    if( !email.includes('@') || !email.includes('.')){
        isValid = false;
        messages.push('Please Include Valid email with @ and .')
    }

    if(password.length < 8 ){
        isValid = false;
        messages.push('Password has to be > 7 digits  ')
    };

// Displaying Feedback

    feedbackDiv.style.display = 'block';

    if (isValid){
        feedbackDiv.textContent = 'Registration successful!'
        feedbackDiv.style.color ="#28a745";
    }
    else{
        feedbackDiv.innerHTML=messages.join("<br>");
        feedbackDiv.style.color ="#dc3545";

    }

});

});