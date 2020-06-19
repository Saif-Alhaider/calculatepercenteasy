const express = require('express');
const path = require('path');
let app = express();

app.use(express.static(path.join(__dirname)))

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','calculatePercent.html'))
})

let port = 3000 || env.Port.
app.listen(3000)