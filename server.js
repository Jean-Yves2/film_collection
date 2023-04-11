const express = require('express');
const session= require('express-session');

require('dotenv').config();
const PORT=process.env.PORT

const router = require('./router/router');
const app = express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

app.use(session({

    secret:process.env.SERCRET,
    resave: true,
    saveUninitialized:true,
    cookie:{
        maxAge: (1000*60*60*10)
    }

}
))

//git commit -m 'ajout de la base de donnée controller ,Mapper '

app.use(router);


app.listen(PORT, () => {
    console.log('server launched at: ' + 'http://localhost:' + PORT);
});