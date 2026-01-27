let users = JSON.parse(localStorage.getItem('data')) || [];
let timeOutId;
function addUser() {
    const getName = document.querySelector('.name');
    const getLastName = document.querySelector('.lastName');
    const getEmail = document.querySelector('.email');
    const getPassword = document.querySelector('.password');
    const error = document.querySelector('.error-msg')

    const name = getName.value;
    const lastname = getLastName.value;
    const email = getEmail.value;
    const password = getPassword.value;

    if (!name || !lastname || !email || !password) {
        error.innerHTML = 'Please fill all the blanks!'
    }
    else {
        users.push({name, lastname, email, password});
        alert('done')
        localStorage.setItem('data', JSON.stringify(users));
        window.location.href = 'login.html'
    }
}