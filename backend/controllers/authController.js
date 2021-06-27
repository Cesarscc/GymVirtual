const Usuario = require('../models/Usuario');
const {errorHandler} = require('../helpers/dberrorHandler');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { throws } = require('assert');
const { exception } = require('console');
let salt = 'f844b09ff50c'



exports.signup = (req, res) => { 
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    nickname : req.body.nickname,
    phone: req.body.phone, 
    password: req.body.password,
  }
    Usuario.findOne({
      // Asegúrese de que el nombre de usuario sea único, es decir, que el nombre de usuario no esté ya en la base de datos
      nickname: req.body.nickname
    })
      .then(user => {
        // Si es usuario es unico lo agrega a la base de datos
        if (!user) {
            let hash = crypto.pbkdf2Sync(userData.password, salt,  
            1000, 64, `sha512`).toString(`hex`);
            userData.password = hash
            Usuario.create(userData)
              .then(user => {
                // Después de crear con éxito userData muestra el mensaje registrado
                res.redirect('/')
              })
              .catch(err => {
                // Si se produjo un error al intentar crear userData, continúe y muestre el error
                res.send('error:' + err)
              })
        } else {
          // Si el nombre de usuario no es único, muestra que el nombre de usuario ya está registrado en una cuenta
          res.json({ error: 'El nickname ' + req.body.username + ' esta esta registrado con una  cuenta' })
        }
      })
      .catch(err => {
        res.send('error:' + err)
})
    //res.json(data);

  /*
  User.findOne({email}, (error, user) => {
    if (error||!user) {
      return res.status(400).json({
        error: 'User with that email does not exist'
      });
    }
    // if user is found make sure the email and password match
    // create authenticate method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'Email and password don\'t match'
      });
    }
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET)
    // persist the token as 't' in cookie with expiration date
    res.cookie('t', token, {expire: new Date() + 9999})
    // return response with user and token to frontend client
    const {_id, name, email, role} = user
    return res.json({token, user: {_id, email, name, role}})
  });*/
}

exports.signin = (req,res) => {

      Usuario.findOne({
        // Verifica si el nombre de usuario esta en la base de datos
        nickname: req.body.nickname,
        password: crypto.pbkdf2Sync(req.body.password, salt,  
          1000, 64, `sha512`).toString(`hex`)
      })
        .then(user => {
          // Si esta, el nombre entonces existe
          if (user) {
            const payload = {
              nickname: user.nickname,
              password: user.password,
            }
            res.send(res.json(user));
            
            const token = jwt.sign(
              {nickname}  ,
              process.env.API_KEY,
              { expiresIn: process.env.TOKEN_EXPIRES_IN },
            );
          }
          else {
            res.send(res.json({error: 'Usuario No Existe'}));
          }
          
        })
      //res.json({data});
}

exports.updateMoney = async (req, res = response) => {
  const authId = req.params.authId;

  try {
      const usuario = Usuario.findById( authId );
      if(!usuario){
          res.status(404).json({
              error: "Usuario no encontrada o no existe"
          });
      }

      const dineroActual = {
          ...req.body
      }

      const dineroActualizado = await Usuario.findByIdAndUpdate(authId, dineroActual,{new:true});

      res.json({
          message: "Actualizado",
          money: dineroActualizado
      })

  } catch (error) {
      console.log(error);
      res.status(500).json({
          error: "Error interno"
      });
  }
}
