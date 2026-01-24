let userAcc = JSON.parse(localStorage.getItem('loginUser')) || [];

function login() {
const error = document.querySelector('.error-msg');
const getEmail = document.querySelector('.email')
const getPassword = document.querySelector('.password')

const temail = getEmail.value; 
const tpassword = getPassword.value; 

   const userData = users.find(data => {
    

    data.email === temail && data.password === tpassword
   }); //if i use bracket, it will become error, so i need to use a return
    

   
   

    if (userData) {
        window.location.href = 'home.html'
        users.find(data => {
            const nameUser = data.name;
            const lastName = data.lastname;
            const userEmail = data.email;
            const userPass = data.password;

            userAcc.push({firstName: nameUser, last: lastName, emailUser: userEmail, passUser: userPass});
            localStorage.setItem('loginUser', JSON.stringify(userAcc));
        })
    }
    else {
        error.innerHTML = 'Wrong email or password'
    }

}
//LOGIN BUTTON
const btnLogin = document.querySelector('.btnLogin');
btnLogin.addEventListener('click', () => {
    login();
});