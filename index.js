const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    data="<h1>asdgasdgasdg</h1>"
    res.send(data)
})
app.listen(process.env.PORT || 3000)
