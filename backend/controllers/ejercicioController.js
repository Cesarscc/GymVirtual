const Ejercicio = require('../models/Ejercicio');
const {errorHandler} = require('../helpers/dberrorHandler');

exports.create = (req,res) => {
    const ejercicio = new Ejercicio(req.body)
    ejercicio.save((err,data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.list = (req,res) => {
    Ejercicio.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});
    })
}

exports.item = (req,res, next) => {
    if (req.ejercicio) {
        return res.send(req.ejercicio)
    }
    next();
}

exports.remove = (req, res) => {
    let ejercicio = req.ejercicio
    ejercicio.remove((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Ejercicio eliminada"
        });
    })

}

exports.ejercicioById = (req, res, next, id) => {
    Ejercicio.findById(id).exec((err, ejercicio)=>{
        if(err || !ejercicio){
            return res.status(400).json({
                error: "Ejercicio no encontrada o no existe"
            })
        }
        req.ejercicio = ejercicio;
        next();
    })
}