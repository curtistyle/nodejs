import express from "express";
import ejs from "ejs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, red) => red.render('index'));

app.listen(3000);
console.log('El server esta en el puerto', 3000);

