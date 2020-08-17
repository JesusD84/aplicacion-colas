// Comando para establecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
    //Codigo que se ejecutara cada vez que nos conectemos al 
    //servidor
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
    //Codigo que se ejecutara cuando nos desconectemos del
    //servidor
});

socket.on('estadoActual', function (data) { 
    label.text(data.actual);
});

$('button').on('click', function () {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});