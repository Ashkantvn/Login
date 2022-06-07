const signUpButton = document.getElementById('SignUp-btn');
const signInButton = document.getElementById('SignIn-btn');
const signUpMenu = document.getElementById('SignUpMenu');
const signInMenu = document.getElementById('SignInMenu');
const options = document.getElementById('options');
const backButton = document.getElementsByClassName('back');
///////////////////////////////////////////////////////////////


////////////////back buttons event 
backButton[0].addEventListener('click', () => {
    if (options.style.display == 'none') {
        options.style.display = 'flex';
        signInMenu.style.display = 'none';
        signUpMenu.style.display = 'none';
    }
})
backButton[1].addEventListener('click', () => {
    if (options.style.display == 'none') {
        options.style.display = 'flex';
        signInMenu.style.display = 'none';
        signUpMenu.style.display = 'none';
    }
})
////////////

//////////////////// sign up and sign in buttons event
signUpButton.addEventListener('click', () => {
    options.style.display = 'none';
    signUpMenu.style.display = 'flex';
})/////display sign-up menu
signInButton.addEventListener('click', () => {
    options.style.display = 'none';
    signInMenu.style.display = 'flex';
})//////display sign-in menu
