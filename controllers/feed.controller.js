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

function modificarFeed(req, res) {
    if (!req.params.id) {
        return res.status(400).send({
            message: 'No se ha encontrado la noticia'
        });
    }
    Feed.findByIdAndUpdate(req.params.id, req.body, (err, feedActualizado) => {
        if (err) {
            return res.status(400).send({
                message: 'Ha habido un error'
            });
        }
        if (!feedActualizado) {
            return res.status(404).send({
                message: 'No se ha encontrado la noticia'
            });
        }
        return res.json(feedActualizado);
    });
}


function borrarFeed(req, res) {
    if (!req.params.id) {
        return res.status(400).send({
            message: 'No se ha encontrado la noticia'
        });
    }
    Feed.findByIdAndRemove(req.params.id, (err, feedBorrado) => {
        if (err) {
            return res.status(400).send({
                message: 'Ha habido un error'
            });
        }
        if (!feedBorrado) {
            return res.status(404).send({
                message: 'No se ha encontrado la noticia'
            });
        }
        return res.json(feedBorrado);
    });
}

function verFeed(req, res) {
    if (!req.params.id) {
        return res.status(400).send({
            message: 'No se ha encontrado la noticia'
        });
    }
    Feed.findById(req.params.id, (err, feed) => {
        if (err) {
            return res.status(400).send({
                message: 'Ha habido un error'
            });
        }
        if (!feed) {
            return res.status(404).send({
                message: 'No se ha encontrado la noticia'
            });
        }
        return res.json(feed);
    });

}

export default {
    crearFeed,
    modificarFeed,
    borrarFeed,
    verFeed
}