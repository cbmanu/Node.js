const express = require('express');
const app = express();
const path = require('path')

//settings
app.set('port',process.env.PORT || 5000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// routes
app.use(require('./routes/'))

// static files
app.use(express.static(path.join(__dirname,'public')))

// listening to port
app.listen(app.get('port'),()=>{
    console.log(`server works on ${app.get('port')}`)
})