import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: 'Todo esta bien!!😀',
  });
});
router.post('/mensajes/:id', (req: Request, res: Response) => {
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

export default router;
