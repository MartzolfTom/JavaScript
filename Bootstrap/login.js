$(document).ready(function() {
     /*   const pseudo =prompt("Quel est votre pseudo ?");
        const mess =prompt("Quel est votre message ?");


    let ws = new WebSocket(`ws://127.0.0.1:8080/chat?pseudo=${pseudo}`,'http');

     ws.send(mess);*/

    const pseudo = prompt("Quel est votre pseudo ?");
    const mess =prompt("Quel est votre message ?");

    let ws = new WebSocket(`ws://127.0.0.1:8080/chat?pseudo=${pseudo}`,'http');
    ws.onmessage = function(e){ console.log(e.data); };
    ws.onopen = () => ws.send(mess);
})
