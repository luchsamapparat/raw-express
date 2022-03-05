const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser');
app.use(bodyParser.raw({
    type: 'application/json'
}));

app.post('/', (req, res) => {
    console.log(req.headers['content-type'], req.headers['x-origin'], req.body);
    res.sendStatus(201);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
