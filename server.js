const express = require('express')
const app = express();

app.set('view engine', 'pug')
app.set('views', './slides')

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Polymer'
  })
})

app.use(express.static('node_modules/reveal.js'));

app.listen(8080);
