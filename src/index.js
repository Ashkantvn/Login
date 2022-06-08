
///////////////////////forms ,inputs and submit elements
const signInEmail = document.getElementById('SignIn-email-input');
const signInPassword = document.getElementById('SignIn-password-input');
const signUpName = document.getElementById('SignUp-name-input');
const signUpEmail = document.getElementById('SignUp-email-input');
const signUpPassword = document.getElementById('SignUp-password-input');
const signUpConfirmPassword = document.getElementById('SignUp-confirm-password-input');
const form = document.getElementsByClassName('form');
//////////////////////button and actions elements
const signUpButton = document.getElementById('SignUp-btn');
const signInButton = document.getElementById('SignIn-btn');
const signUpMenu = document.getElementById('SignUpMenu');
const signInMenu = document.getElementById('SignInMenu');
const options = document.getElementById('options');
const backButton = document.getElementsByClassName('back');
///////////////////user informations
const signInUser = {
    email : '',
    password: '',
}
const signUpUser = {
    name :'',
    email : '',
    password: '',
}

////////////////back buttons event 
backButton[0].addEventListener('click', () => {
    if (options.style.display == 'none') {
        options.style.display = 'flex';
        signInMenu.style.display = 'none';
        signUpMenu.style.display = 'none';
        signInEmail.value='';
        signInPassword.value='';
    }
})////signIn button
backButton[1].addEventListener('click', () => {
    if (options.style.display == 'none') {
        options.style.display = 'flex';
        signInMenu.style.display = 'none';
        signUpMenu.style.display = 'none';
        signUpName.value='';
        signUpEmail.value='';
        signUpPassword.value='';
        signUpConfirmPassword.value='';
    }
})/////signUp button

//////////////////// sign up and sign in buttons event
signUpButton.addEventListener('click', () => {
    options.style.display = 'none';
    signUpMenu.style.display = 'flex';
})/////display sign-up menu
signInButton.addEventListener('click', () => {
    options.style.display = 'none';
    signInMenu.style.display = 'flex';
})//////display sign-in menu


///////////////submit event
form[0].addEventListener('submit' , (e)=>{
    e.preventDefault();
    signInUser.email=signInEmail.value;
    signInUser.password=signInPassword.value;
    alert('welcome!');
})////sign-in actions
form[1].addEventListener('submit',(e)=>{
    e.preventDefault();
    if(signUpPassword.value == signUpConfirmPassword.value){
        signUpUser.name=signUpName.value;
        signUpUser.email=signUpEmail.value;
        signUpUser.password=signUpPassword.value;
        useSignUpFetch();
    }else{
        alert('your password and confirm password are different');
        signUpConfirmPassword.value = '';
        signUpPassword.value = '';
    }
})////sign-up actions



////////////fetch api 
function useSignUpFetch() {
    fetch('https://api.freerealapi.com/auth/register',{
        method:'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            name:signUpUser.name,
            email:signUpUser.email,
            password:signUpUser.password,
        }),
    })
    .then((res) => res.json())
    .then((json) => {
        if(json.success == false){
            alert(json.message || Object.values(json.messages))
        }else{
            alert('sign-up completed click on back button to sign in ')
        }
        })
}