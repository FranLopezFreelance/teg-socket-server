import { Router, Request, Response } from 'express';
const AppRouter = Router();

AppRouter.get('/countries', (req: Request, res: Response) => {
  res.json({
    ok: true,
    status: 200,
    message: 'Todos los paises'
  });
});

export default AppRouter;
