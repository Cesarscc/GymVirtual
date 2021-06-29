const Category = require('../models/Category');
const {errorHandler} = require('../helpers/dberrorHandler');

exports.create = (req,res) => {
    const category = new Category(req.body)
    category.save((err,data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.list = (req,res) => {
    Category.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});
    })
}

exports.item = (req,res, next) => {
    if (req.category) {
        return res.send(req.category)
    }
    next();
}

exports.remove = (req, res) => {
    let category = req.category
    category.remove((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Categoria eliminada"
        });
    })

}

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category)=>{
        if(err || !category){
            return res.status(400).json({
                error: "Categoria no encontrada o no existe"
            })
        }
        req.category = category;
        next();
    })
}