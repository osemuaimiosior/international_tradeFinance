const express = require('express');
const app = express();

const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 5000;

const whitelist = ['https://www.domainname.com','http://127.0.0.1:5500','http://localhost:3500'];
const corsOptions = {
    orgin: (origin, callback)=>{
        if(whitelist.indexOf(origin) !== -1 || !orign) {
            callback(null, true)
        } else {
            callback(new Error ("Not allowed by CORS"));
        }
    }, 
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/root'));


app.listen(PORT, () => console.log("server is runing on port", PORT)); 