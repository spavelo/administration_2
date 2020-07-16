let users = [{
    name: '2',
    password: '2',
}];

function showLoginDialog() {
    document.getElementsByClassName('login-popup-container')[0].style.display = 'block';
    document.getElementsByClassName('login-user')[0].style.display = 'block';
}

function showRegistrationDialog() {
    document.getElementsByClassName('login-popup-container')[0].style.display = 'block';
    document.getElementsByClassName('register-user')[0].style.display = 'block';
}

function closePopupDialog() {
    document.getElementsByClassName('login-popup-container')[0].style.display = 'none';
    document.getElementsByClassName('register-user')[0].style.display = 'none';
    document.getElementsByClassName('login-user')[0].style.display = 'none';
}

function loginUser() {
    let credential = getCredential();

    if (isUserExist(credential)) {
        showDataForAutorizedUser(credential.username);
    } else {
        showErrorMassage('Wrong data');
    }
}

function registerUser() {
    let credential = getCredential();

    if (isUserExist(credential)) {
        showErrorMassage('User is already exist!');
    } else {
        showDataForAutorizedUser(credential.username);
        users.push(credential);
    }
}
function logOut() {
    document.getElementsByClassName('user-container')[0].style.display = 'none';
    document.getElementsByClassName('login')[0].style.display = 'block';
    document.getElementsByClassName('registration')[0].style.display = 'block';
    // document.getElementById('name').value = '';
    // document.getElementById('password').value = '';
}

function showDataForAutorizedUser(username) {
    document.getElementsByClassName('user-container')[0].style.display = 'block';
    document.getElementsByClassName('login-popup-container')[0].style.display = 'none';
    document.getElementsByClassName('login')[0].style.display = 'none';
    document.getElementsByClassName('registration')[0].style.display = 'none';
    document.getElementsByClassName('nickname')[0].innerHTML = username;
    document.getElementsByClassName('massage')[0].style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('password').value = '';
    closePopupDialog();
    showUserData()

}

function showUserData() {
    document.getElementsByClassName('user-data')[0].style.display = 'block';
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

function showErrorMassage(massage = '') {
    document.getElementsByClassName('massage').innerHTML = massage;
    document.getElementsByClassName('massage')[0].style.display = 'block';
}