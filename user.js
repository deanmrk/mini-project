let users = JSON.parse(localStorage.getItem('data')) || [];

function addUser() {
    const getName = document.querySelector('.name');
    const getLastName = document.querySelector('.lastName');
    const getEmail = document.querySelector('.email');
    const getPassword = document.querySelector('.password');

    const name = getName.value;
    const lastname = getLastName.value;
    const email = getEmail.value;
    const password = getPassword.value;

    users.push({name, lastname, email, password});
    localStorage.setItem('data', JSON.stringify(users));
}