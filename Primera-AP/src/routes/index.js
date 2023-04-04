import { Router } from "express"; 

const router = Router();

router.get('/', (req, red) => red.render('index', { title : 'Bienvenidos' }));
router.get('/about', (req, red) => red.render('about', { title : 'Acerca de.'}));
router.get('/contact', (req, red) => red.render('contact', { title : 'Contactanos.'}));

export default router