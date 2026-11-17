/**
 * INFO2180 Project 1 - Newsletter subscription
 *
 * Simulates a newsletter sign-up. When the form is submitted, the page
 * does not reload. Instead, a message is shown in the .message div:
 * Wrapped in DOMContentLoaded because this script is loaded in the <head>,
 * so the elements it uses do not exist until the page has finished loading.
 */
document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const message = document.querySelector(".message");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const email = emailInput.value.trim();
        
        if (email === ""){
            message.textContent = "Please enter a valid email address.";
        } 
        else
        {
            message.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
            form.reset();
        }
    });
});