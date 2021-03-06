// Global import
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

// Local import
const config = require('../config');
const router = require('./routes');

const app = express();
const port = config.port;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: true,
}));

app.use('/', express.static(path.join(__dirname, './../build')));

app.use('/api', router);


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../build/index.html'));
});

app.use((err, req, res) => {
  res.status(500).send('[server    ] critical error detected...');
});

app.listen(port, () => {
  console.log(`[server    ] opening on port ${port}...`);
});

module.exports = app;
