let users = [];
let dialog = {
    showLogin() {
        getElementsByClassName('login-popup-container').style.display = 'block';
        getElementsByClassName('login-user').style.display = 'block';
    },
    showRegistration() {
        getElementsByClassName('login-popup-container').style.display = 'block';
        getElementsByClassName('register-user').style.display = 'block';
    },
    closePopup() {
        getElementsByClassName('login-popup-container').style.display = 'none';
        getElementsByClassName('register-user').style.display = 'none';
        getElementsByClassName('login-user').style.display = 'none';
        getElementsByClassName('massage').style.display = 'none';
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
        getElementsByClassName('login-popup').style.height = '134px';
    }
};

let accountMenu = {
    show(username){
        getElementsByClassName('user-container').style.display = 'block';
        getElementsByClassName('login-popup-container').style.display = 'none';
        getElementsByClassName('login').style.display = 'none';
        getElementsByClassName('registration').style.display = 'none';
        getElementsByClassName('nickname').innerHTML = username;
        getElementsByClassName('massage').style.display = 'none';
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
        dialog.closePopup();
        showUserData();
    },
    logOut() {
        getElementsByClassName('user-container').style.display = 'none';
        getElementsByClassName('login').style.display = 'block';
        getElementsByClassName('main-menu').style.display = 'flex';
        getElementsByClassName('main-menu').style['flex-direction'] = 'row';
        getElementsByClassName('registration').style.display = 'block';
        getElementsByClassName('user-data').style.display = 'none';
    }
};

function loginUser() {
    let credential = getCredential();

    if (isUserExist(credential)) {
        accountMenu.show(credential.username);
    } else {
        showErrorMassage('Wrong data!');
        getElementsByClassName('login-popup').style.height = '134px';

    }
}

function registerUser() {
    let credential = getCredential();

    if (isUserExist(credential)) {
        showErrorMassage('User is already exist!');
        getElementsByClassName('login-popup').style.height = '154px';
    } else {
        accountMenu.show(credential.username);
        users.push(credential);
    }
}

function showErrorMassage(massage = '') {
    getElementsByClassName('massage').innerHTML = massage;
    getElementsByClassName('massage').style.display = 'block';
}

function showUserData() {
    getElementsByClassName('user-data').style.display = 'block';
}

function isUserExist({username}) {
    let filteredUsers = users.filter(user => username === user.username);
    return !!filteredUsers.length;
}

function getCredential() {
    let username = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    return {username, password};
}

function getElementsByClassName(className) {
    return document.getElementsByClassName(className)[0];
}

