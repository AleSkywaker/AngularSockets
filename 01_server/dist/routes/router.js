"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!😀',
    });
});
router.post('/mensajes/:id', (req, res) => {
    let cuerpo = req.body.cuerpo;
    let de = req.body.de;
    let id = req.params.id;
    res.json({
        ok: true,
        id,
        de,
        cuerpo,
        mensaje: 'POST - Todo esta bien!!😀',
    });
});
exports.default = router;
