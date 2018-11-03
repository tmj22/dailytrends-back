import express from 'express';
import feedCtrl from '../controllers/feed.controller';

const router = express.Router();

router.route('/crear')
  /** POST /api/feed/crear - Añadir una noticia */
  .post(feedCtrl.crearFeed);

export default router;