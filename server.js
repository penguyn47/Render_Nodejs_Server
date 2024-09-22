const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {

    res.json({message: "Server hosted successfully, with 22120183"});
})

app.listen(port, ()=>{
    console.log(`Server hosted on port ${port}`);
})