import { Router } from 'express';
import { check } from "express-validator";
import loginID from '../../controllers/client-control/login-ID.js';
import addPhotos from '../../controllers/client-control/add-photos.js';
import addProducts from '../../controllers/client-control/add-products.js';
import existingCart from '../../controllers/client-control/get-existing-cart.js';
import newOrder from '../../controllers/client-control/new-order.js';
import likedPhotos from '../../controllers/client-control/get-liked-photos.js';

const clientRoute = Router();

clientRoute.post('/login-id', [check('clientID').isLength({ min: 10 })], loginID);
clientRoute.patch('/add-photos/:uid', addPhotos);
clientRoute.patch('/add-products/:uid', addProducts);
clientRoute.get('/existing-cart/:uid', existingCart);
clientRoute.post('/new-order/:uid', newOrder);
clientRoute.get('/liked-photos/:uid', likedPhotos);

export default clientRoute;