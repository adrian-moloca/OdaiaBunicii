import { Router } from 'express';
import { check } from "express-validator";
import loginID from '../../controllers/client-control/login-ID.js';
import addSessionPhotos from '../../controllers/client-control/add-session-photos.js';
import addProducts from '../../controllers/client-control/add-products.js';
import existingCart from '../../controllers/client-control/get-existing-cart.js';
import newOrder from '../../controllers/client-control/new-order.js';
import sessionPhotos from '../../controllers/client-control/get-session-photos.js';

const clientRoute = Router();

clientRoute.post('/login-id', [check('clientID').isLength({ min: 10 })], loginID);
clientRoute.patch('/add-session-photos/:uid', addSessionPhotos);
clientRoute.patch('/add-products/:uid', addProducts);
clientRoute.get('/get-existing-cart/:uid', existingCart);
clientRoute.post('/new-order/:uid', newOrder);
clientRoute.get('/get-session-photos/:uid', sessionPhotos);

export default clientRoute;