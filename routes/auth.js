// Rotas de autenticação

import express from 'express';

const router = express.Router();

router.post('/register', reguister);
router.post('/login', login);

export default router;