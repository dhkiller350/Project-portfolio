// script.js
function redirectTo(url) {
    window.location.href = url;
}

function customAlert(message) {
            const originalTitle = document.title;
            const customTitle = "Welcome!";
            
            // Change the title to create a "titled alert box" effect
            document.title = customTitle;
            
            // Show the alert box
            alert("Welcome to my projects");

            // Revert the title back to the original after the alert is dismissed
            document.title = originalTitle;
        }
