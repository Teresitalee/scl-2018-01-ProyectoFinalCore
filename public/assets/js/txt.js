// los elementos del DOM

const numberInput = document.getElementById('number'), // obtener el Numero
textInput = document.getElementById('msg'),// obtengo el mensaje
button = document.getElementById('button'),// obtengo el boton
response = document.querySelector('.response'); //traer toda la interfaz del usuario (respuesta)

button.addEventListener('click',send,false); // llamado al clcik cuando se enviar

function send() {
const number = numberInput.nodeValue.replace(/\D/g,'');
const text = textInput.value;

// aca entramos a las promesas de solicitud de la API

fetch(' /' , {
    method: 'post',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({number: number, text: text})

})
   .then(function(res){
       console.log(res);
   })
   .catch(function(err){
   console.log(err);
});
}