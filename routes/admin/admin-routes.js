import { Router } from 'express';
import { check } from "express-validator";

// import generateQR from '../../controllers/admin-control/generate-QR.js';
import loginID from '../../controllers/client-control/login-ID.js';
// import sessionStart from '../../controllers/admin-control/session-start.js';

const adminRoute = Router();

// adminRoute.post('/generate-QR', generateQR);
adminRoute.post('/login-id', [check('clientID').isLength({ min: 10 })], loginID);
// adminRoute.patch('/session/:uid', sessionStart);

export default adminRoute;