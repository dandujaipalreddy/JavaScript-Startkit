import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';
/* eslint-disable no-console */
const port = 3000;
const compiler = webpack(config);
const app = new express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {

  res.json([{"id":"jaipal","branch":"CS"},{"id":"Ravi","branch":"Civil"}]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
})
