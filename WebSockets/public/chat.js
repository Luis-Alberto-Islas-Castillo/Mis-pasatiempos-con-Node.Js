let socket = io();

//Elemnetos
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

//llamando a los elementos
btn.addEventListener('click', function () {
    socket.emit('chat:message', {
        username: username.value,
        message: message.value
    });
});

//MOstradon mensaje
message.addEventListener('keypress', function () {
    socket.emit('chat:typing', username.value);
});

//trayendo los datos
socket.on('chat:message', function (data) {
    actions.innerHTML = '';
    output.innerHTML += `<p>
    <strong>${data.username}</strong>: ${data.message}
    </p>`
});

//identificacion de usuario
socket.on('chat:typing', function (data) {
    actions.innerHTML = `<p><em>${data} esta escribiendo un mensaje...</em></p>`
});