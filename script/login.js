 
// Login Form 
document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('input-email');
    const email = emailField.value;
    const passwordText = document.getElementById('password');
    const password = passwordText.value;
    if (email === 'masum@gmail.com' && password === "225580") {
        
         window.location.href="bank.html"
    }
    else {
       alert("Tui Password Bhule Gechos .Tui access pabi na baper bank e")
    }

})



