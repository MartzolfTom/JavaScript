// Quand le doc est chargé, ma fonction se charge
$(document).ready(function(){
    // Nouvelle version de val (let)
    const pseudo = prompt("Quel est votre pseudo ?")
    let ws = new WebSocket(`ws://localhost:8080/chat?pseudo=${pseudo}`, "http");

    $("button").click(function(){

        // Je récupere la valeur du champ d'entrée, puis je l'envoie
        let msg = $("input").val();
        ws.send(msg);
    });
    ws.addEventListener('open', function (event) {
        ws.send('Connecté !');

        let div = document.getElementById('Messages');

        // On le récupère au format JSON, donc on le transforme en objet
        const data = JSON.parse(event.data);
        // Puis on récupère ses attributs un à un
        div.innerHTML = "<p>" + div.innerHTML + data.emetteur + " : " + data.texte + "</p>";
    });

    // Listen for messages
    ws.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
        let div = document.getElementById('Messages');

        // On le récupère au format JSON, donc on le transforme en objet
        const data = JSON.parse(event.data);
        // Puis on récupère ses attributs un à un
        div.innerHTML = "<p>" + div.innerHTML + data.emetteur + " : " + data.texte + "</p>";

        // On reset l'input
        let inp = document.getElementById("inp");
        inp.value = "";
    });
});