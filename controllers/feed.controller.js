import mongoose from 'mongoose';
import FeedModel from '../models/feed.model';
const Feed = FeedModel.feed;

function crearFeed(req, res) {

    const nuevoFeed = new Feed();
    nuevoFeed.title = req.body.title;
    nuevoFeed.body = req.body.body;
    nuevoFeed.image = req.body.image;
    nuevoFeed.source = req.body.source;
    nuevoFeed.publisher = req.body.publisher;

    nuevoFeed.save((err, feedGuardado) => {
        if (err) {
            return res.status(400).send({
                message: 'Ha habido un error al guardar la noticia'
            });
        } else {
            return res.json(feedGuardado);
        }
    });
}


export default {
    crearFeed
}