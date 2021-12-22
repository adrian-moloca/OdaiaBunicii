import { Router } from 'express';
import { check } from "express-validator";

import generateQR from '../../controllers/admin-control/generate-QR.js';
import sessionClient from '../../controllers/admin-control/session-client.js';
import existingOrder from '../../controllers/admin-control/view-orders.js';

const adminRoute = Router();

adminRoute.post('/generate-QR', generateQR);
adminRoute.post('/session-id/:uid', [check('clientID').isLength({ min: 12 })], sessionClient);
adminRoute.get('/get-existing-order/:uid', existingOrder);


export default adminRoute;