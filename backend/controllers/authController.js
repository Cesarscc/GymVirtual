const Usuario = require("../models/Usuario");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { throws } = require("assert");
const { exception } = require("console");
let salt = "f844b09ff50c";

exports.signup = (req, res) => {
  console.log(req.body);
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    nickname: req.body.usuario,
    password: req.body.password,
  };
  Usuario.findOne({
    // Asegúrese de que el nombre de usuario sea único, es decir, que el nombre de usuario no esté ya en la base de datos
    nickname: req.body.usuario,
  })
    .then((user) => {
      // Si es usuario es unico lo agrega a la base de datos
      if (!user) {
        let hash = crypto
          .pbkdf2Sync(userData.password, salt, 1000, 64, `sha512`)
          .toString(`hex`);
        userData.password = hash;
        Usuario.create(userData)
          .then((user) => {
            // Después de crear con éxito userData muestra el mensaje registrado
            res.status(200).send(user);
          })
          .catch((err) => {
            // Si se produjo un error al intentar crear userData, continúe y muestre el error
            res.status(500).send("error:" + err);
          });
      } else {
        // Si el nombre de usuario no es único, muestra que el nombre de usuario ya está registrado en una cuenta
        res.status(500).send({
          error:
            "El nickname " +
            req.body.usuario +
            " esta esta registrado con una  cuenta",
        });
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });
};

exports.signin = (req, res) => {
  Usuario.findOne({
    // Verifica si el nombre de usuario esta en la base de datos
    nickname: req.body.nickname,
    password: crypto
      .pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`)
      .toString(`hex`),
  }).then((user) => {
    // Si esta, el nombre entonces existe
    if (user) {
      const payload = {
        nickname: user.nickname,
        password: user.password,
      };
      res.send(res.json(user));

      const token = jwt.sign({ nickname }, process.env.API_KEY, {
        expiresIn: process.env.TOKEN_EXPIRES_IN,
      });
    } else {
      res.send(res.json({ error: "Usuario No Existe" }));
    }
  });
  //res.json({data});
};

exports.updateUsuario = async (req, res) => {
  const idUsuario = req.params.authId;

  try {
    const usuario = Usuario.findById(idUsuario);
    if (!usuario) {
      res.status(404).json({
        error: "Usuario no encontrada o no existe",
      });
    }
    const usuarioToInsert = {
      ...req.body,
    };
    const usuarioUpdated = await Usuario.findByIdAndUpdate(
      idUsuario,
      usuarioToInsert,
      { new: true }
    );

    res.json({
      message: "Actualizado",
      usuario: usuarioUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error interno",
    });
  }
};
/* exports.updateMoney = async (req, res = response) => {
  const authId = req.params.authId;

  try {
    const usuario = Usuario.findById(authId);
    if (!usuario) {
      res.status(404).json({
        error: "Usuario no encontrada o no existe",
      });
    }

    const dineroActual = {
      ...req.body,
    };

    const dineroActualizado = await Usuario.findByIdAndUpdate(
      authId,
      dineroActual,
      { new: true }
    );

    res.json({
      message: "Actualizado",
      money: dineroActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error interno",
    });
  }
};
 */
