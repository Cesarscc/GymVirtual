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

exports.exercisesByCategory = (req,res) => {
    let category = req.params.nameCategory;
    let level = req.params.level;

    console.log(level);

    Exercise.find({category: category, level: level}).exec((err,data)=>{
        
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        data = randomArray(data);
        res.json({data});
    })
}

const randomArray = (data) => {
    
    fData = [];
    count = 2;

    if(count > data.length){
        count = data.length;
        console.log(data.length);
    }

    for (let i = 0; i < count; i++) {
        ex = data[Math.floor(Math.random()*data.length)];
        data = data.filter(item => item !== ex);
        fData.push(ex);
    }

    return fData;
}