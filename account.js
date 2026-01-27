const userInside = [];

const container = document.querySelector('.container')
let html = '';

userAcc.forEach( (value) => {
    html += `
    <div class="data">
            <p class="js-name">First Name: ${value.firstName}</p>
            <p class="js-lastname">Last name: ${value.last}</p>
            <p class="js-email">Email: ${value.emailUser}</p>
            <p class="js-password">Password: <span class="pass">${value.passUser}</span></p>
            <button class="btnLogout" onclick="">Logout</button>
        </div>
    `;
})
container.innerHTML = html;
