$(document).ready(function() {

    const pseudo = document.getElementById("name").value;
    let ws = new WebSocket(`ws://127.0.0.1:8080/chat?pseudo=${pseudo}`,'http');

    ws.addEventListener("message",function (event) {
        console.log(event.data);
    })
    ws.addEventListener("open",function (event) {
        const mess =prompt("Quel est votre message ?");
        ws.send(mess);
    })
})
