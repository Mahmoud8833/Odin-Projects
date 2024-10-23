const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const formContainer = document.getElementsByClassName('formContainer');

signInBtn.addEventListener('click', () => {
  signIn.style.display = 'block';
  signUp.style.display = 'none';
});

signUpBtn.addEventListener('click', () => {
  signIn.style.display = 'none';
  signUp.style.display = 'block';
});
