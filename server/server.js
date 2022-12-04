const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'));

app.use('/api', routes);

app.listen(5000, () => console.log('Server listening on port 5000'));

module.exports = {
  app
}