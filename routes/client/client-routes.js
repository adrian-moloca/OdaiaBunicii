import { Router } from 'express';
import { check } from "express-validator";

import loginID from '../../controllers/client-control/login-ID.js';

const clientRoute = Router();

clientRoute.post('/login-id', [check('clientID').isLength({ min: 10 })], loginID);

export default clientRoute;