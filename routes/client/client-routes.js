import { Router } from 'express';
import { check } from "express-validator";
import loginID from '../../controllers/client-control/login-ID.js';
import addPhotos from '../../controllers/client-control/add-photos.js';
import addProducts from '../../controllers/client-control/add-products.js';

const clientRoute = Router();

clientRoute.post('/login-id', [check('clientID').isLength({ min: 10 })], loginID);
clientRoute.patch('/add-photos/:uid', addPhotos);
clientRoute.patch('/add-products/:uid', addProducts);

export default clientRoute;