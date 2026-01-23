let id;
function login() {
const error = document.querySelector('.error-msg');
const getEmail = document.querySelector('.email')
const getPassword = document.querySelector('.password')

const temail = getEmail.value; 
const tpassword = getPassword.value; 

    users.forEach( (value) => {
        const { email, password} = value;

        if (!temail || !tpassword) {
            id = setInterval( () => {
                error.innerHTML = 'Please create an account first!'
            }, 1500)
        }
        else if (email === value.email && password === value.password) {
            clearInterval(id);
            window.location.href = 'home.html'
        }
    })
}

const btnLogin = document.querySelector('.btnLogin');
btnLogin.addEventListener('click', () => {
    login();
})