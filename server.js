const express = require('express');
const app = express();
const port = 3002;

// web server
app.use(express.static('frontend'));

app.listen(port, function(){
    console.log("Server is running at http://localhost:"+port);
})

