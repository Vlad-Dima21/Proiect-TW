const { response, raw } = require('express');
const express = require('express');
const fs = require('fs');
const { execPath } = require('process');
const app = express();
const port = 5000;


const readJSONfile = (file) => {
    const rawData = fs.readFileSync(file);
    const parsedData = JSON.parse(rawData);
    return parsedData;
}

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(('/pagina-nu-a-fost-gasita'), express.static('eroare404'));
app.use(('/reparari-telefoane'), express.static('resources'));

app.get('/', (req,res) => {
    res.redirect('/reparari-telefoane/parte1.html');
});

app.get('/reparari-telefoane', (req,res) => {
    const data = readJSONfile('./db/intrari.json');
    // console.log('23');
    res.send(data);   
});



app.post('/reparari-telefoane', (req,res) => {
    const intrare = req.body.intrareNoua;
    const data = readJSONfile('./db/intrari.json');
    data.push(intrare);
    fs.writeFileSync('./db/intrari.json', JSON.stringify(data));

    res.send(intrare);
});

app.listen(port, () => {
    console.log('server start');
});

app.use(function(req, res, next) {
    res.status(404);
    res.redirect('/pagina-nu-a-fost-gasita/pagina404.html');

  
    
    // res.type('txt').send('Not found');
  });