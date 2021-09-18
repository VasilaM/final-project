function giveError() {
    window.location.href = 'errorPage.html';
}

function gotoLogin() {
    window.location.href = 'log-in-page.html'
}

function msgSent() {
    let name=document.getElementById('name')
    let msg=document.getElementById('message')

    if (name.value === "" && msg.value === "") {
        alert("Uh-oh, no message was sent :(")
        window.location.reload()
    } else if(name.value === ""){
        alert ("Good news, your message was sent!")
        window.location.reload()
    } else if (msg.value === "") {
        alert('Uh-oh '+name.value+', you did not send a message :(')
        window.location.reload()
    } else {
        alert("Good news "+name.value+"! Your message was successfully sent!")
        window.location.reload()
    }

}