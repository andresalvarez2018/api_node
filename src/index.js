const express =  require('express');
const app = express();

//configuraciones de la aplicacion
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/products'));
app.use(require('./routes/providers'));
app.use(require('./routes/categorias'));

//configuracion puerto escucha servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en el puerto', app.get('port'));
})