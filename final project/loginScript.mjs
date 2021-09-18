let usernameValue = document.getElementById('username')
let password = document.getElementById('password')


function logIn() {
    
if (usernameValue.value=='vmirshamsova' && password.value=='stars') {
    window.location.href = 'myAcc.html';
} else {
    alert("Oh no! Incorrect username or password entered :(")
}

}

function signOut() {
    let signOut=confirm('Are you sure you want to sign out?')
    if (signOUt) {
        window.location.href='index.html'
    } else {
        window.location.reload()
    }

}