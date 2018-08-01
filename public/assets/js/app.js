const express = require('express'); // trae todas las dependencias del proyecto
const bodyParser = require('body-parser');//
const ejs = require('ejs'); //ejemplos
const Nexmo = require('nexmo');//la api a utilizar
const socketio = require('socket.io');// es un motor de tiempo real de NODE.js

// inicializando NEXMO
const nexmo = new Nexmo({
        apiKey: '2be8b8c6',
        apiSecret: 'qXhx5lyHpIKrkvLM'
      }, {debug: true});
      
// iniciaizado la aplicación de MSN
const app = express(); // hacemos la variable con express y creamos la aplicación

// aca esta el modelo de vista del html
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// se crea una carpeta publica estatica
app.use(express.static(__dirname + '/public'));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// obteniendo solicitud y respuesta de las rutas con vista desde el INDEX
app.get('/', (req, res) => {
    res.render('index');
  });

// catch del submit
app.post('/' , (req,res)=> {
    //res.send(req.body);
    //console.log(req.body);
    const number = req.body.number;
    const text = req.body.text;

    nexmo.message.sendSms(
        '56953908406', number, text, { type: 'unicode' },
        (err, responseData) => {
          if(err) {
            console.log(err);
          } else {
            console.dir(responseData);
            // obtengo la data desde response
            const data = {
              id: responseData.messages[0]['message-id'],
              number: responseData.messages[0]['to']
            }
    
            // Emito un sms al cliente
            io.emit('smsStatus', data);
          }
        }
      );
    });

// Damos por definición un puerto (importante para el server) lo configuramos asi
const port = 3000;

// inicializaremos el server que escucha al puerto 3000
const server = app.listen(port, () => console.log(`Server inicializa en el puerto  ${port}`));

// Conectando al socket.io
const io = socketio(server);
io.on('connection', (socket) => {
  console.log('Conectada');
  io.on('desconectada', () => {
    console.log('Desconectada');
  })
})
