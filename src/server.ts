import express from 'express';
import { get } from 'http';
import path from 'path';


const app = express();
const port = 3000;
const __dirname = import.meta.dirname;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
   var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
    { name: 'Tux', organization: "Linux", birth_year: 1996},
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
 ];
 var tagline = "No programming concept is complete without a cute animal mascot.";
 
    res.render('index', {
      mascots: mascots,
      tagline: tagline
 });
    });
app.post('/', (req, res) => {
    res.send('HELLO UNO! from post');
});
app.put('/', (req, res) => {
    res.send('HELLO UNO! from put');
});
app.delete('/', (req, res) => {
    res.send('HELLO UNO! from delete');
});



app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
});
