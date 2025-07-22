import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home' });
});
app.get('/*', (req, res) => res.redirect('/'));

console.log('Hello, World!');

const server = http.createServer(app);

const wss = WebSocket.Server({ server });

server.listen(3000);