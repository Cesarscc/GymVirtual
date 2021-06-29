const Exercise = require('../models/Exercise');
const {errorHandler} = require('../helpers/dberrorHandler');

exports.create = (req,res) => {
    const exercise = new Exercise(req.body)
    exercise.save((err,data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.list = (req,res) => {
    Exercise.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});
    })
}

exports.item = (req,res, next) => {
    if (req.exercise) {
        return res.send(req.exercise)
    }
    next();
}

exports.remove = (req, res) => {
    let exercise = req.exercise
    exercise.remove((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Exercise eliminada"
        });
    })

}

exports.exerciseById = (req, res, next, id) => {
    Exercise.findById(id).exec((err, exercise)=>{
        if(err || !exercise){
            return res.status(400).json({
                error: "Exercise no encontrada o no existe"
            })
        }
        req.exercise = exercise;
        next();
    })
}