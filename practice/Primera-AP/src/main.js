import express from "express";
import ejs from "ejs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from './routes/index.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* 
app.get('/', (req, red) => red.render('index'));
app.get('/about', (req, red) => red.render('about'));
app.get('/contact', (req, red) => red.render('contact'));
*/

app.use(indexRoutes);
app.use(express.static(join(__dirname, 'public')))

app.listen(3000);
console.log('El server esta en el puerto', 3000);

