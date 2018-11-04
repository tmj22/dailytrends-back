import express from 'express';
import feedCtrl from '../controllers/feed.controller';

const router = express.Router();

router.route('/crear')
  /** POST /api/feed/crear - Añadir una noticia */
  .post(feedCtrl.crearFeed);

  router.route('/modificar/:id')
  /** POST /api/feed/modificar/:id- Modificar noticia */
  .post( feedCtrl.modificarFeed );

  router.route('/borrar/:id')
  /** DELETE /api/feed/borrar/:id- Borrar noticia */
  .delete( feedCtrl.borrarFeed );

  
  router.route('/ver/:id')
  /** POST /api/feed/ver/:id- Ver noticia */
  .get( feedCtrl.verFeed );

export default router;