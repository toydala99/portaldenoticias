const app = require('./config/server');
/*const rotaNoticias = require('./app/routes/noticias.routes')(app);
const rotaHome = require('./app/routes/home.routes')(app);
const rotaForm = require('./app/routes/form.routes')(app);
*/

app.listen(3000, ()=>{console.log("Server runnin on port 3000")})
