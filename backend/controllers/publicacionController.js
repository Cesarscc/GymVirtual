const Publicacion = require('../models/Publicacion');
const {errorHandler} = require('../helpers/dberrorHandler');

exports.create = (req,res) => {
    const publicacion = new Publicacion(req.body)
    publicacion.save((err,data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.list = (req,res) => {
    Publicacion.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});
    })
}

exports.item = (req,res, next) => {
    if (req.publicacion) {
        return res.send(req.publicacion)
    }
    next();
}

exports.remove = (req, res) => {
    let publicacion = req.publicacion
    publicacion.remove((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Publicacion eliminada"
        });
    })

}

exports.publicacionById = (req, res, next, id) => {
    Publicacion.findById(id).exec((err, publicacion)=>{
        if(err || !publicacion){
            return res.status(400).json({
                error: "Publicacion no encontrada o no existe"
            })
        }
        req.publicacion = publicacion;
        next();
    })
}

exports.publicacionbyuser = (req,res) => {
    let user = req.params.user;
    console.log(user);
    Publicacion.find({user: user}).exec((err,data)=>{
        
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }

        res.json({data});
    })
}

//POR CORREGIR
exports.updatePublicacion = (req, res = response) => {
    const publicacionId = req.object.params.id;
    Publicacion.findById( publicacionId ).exec((err, publicacion)=>{
        if(err || !publicacion){
            return res.status(400).json({
                error: "Publicacion no encontrada o no existe"
            })
        }

        const nuevo = {
            ...req.body,
        }
    
        Publicacion.findByIdAndUpdate(publicacionId, nuevo, {new:true,useFindAndModify: false});
        
        res.json({
            message: "Publicacion actualizada"
        });
    });
}