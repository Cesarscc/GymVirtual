const Solucion = require("../models/Solucion");
const Publicacion = require("../models/Publicacion");
exports.create = (req, res) => {
  const solucion = new Solucion(req.body);
  solucion.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

exports.list = (req, res) => {
  Solucion.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};

exports.solucionbypost = (req, res) => {
  let pub = req.params.publicacionId;
  Solucion.find({ idpost: pub }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json({ data });
  });
};

exports.remove = (req, res) => {
  let solucion = req.solucion;
  solucion.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Solucion eliminada",
    });
  });
};

exports.solucionById = (req, res, next, id) => {
  Solucion.findById(id).exec((err, solucion) => {
    if (err || !solucion) {
      return res.status(404).json({
        error: "Solucion no encontrada o no existe",
      });
    }
    req.solucion = solucion;
    next();
  });
};

exports.updateSolution = async (req, res = response) => {
  const solucionId = req.params.solucionId;

  try {
    const solucion = Solucion.findById(solucionId);
    if (!solucion) {
      res.status(404).json({
        error: "Solucion no encontrada o no existe",
      });
    }

    const nuevaSolucion = {
      ...req.body,
    };

    const solucionActualizada = await Solucion.findByIdAndUpdate(
      solucionId,
      nuevaSolucion,
      { new: true }
    );

    res.json({
      message: "Actualizado",
      solucion: solucionActualizada,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error interno",
    });
  }
};
