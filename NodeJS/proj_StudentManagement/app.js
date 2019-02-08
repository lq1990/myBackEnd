var express = require('express');
var app = express();
var mainctrl = require('./controllers/mainctrl.js');

app.set('view engine', 'ejs');

// 路由清单
app.get('/', mainctrl.showIndex);
app.get('/allstudent', mainctrl.allstudent);
app.get('/add', mainctrl.showAdd);
app.post('/add', mainctrl.doAdd);

app.use(express.static('public'));

app.listen(3000);
