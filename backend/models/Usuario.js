const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: false,
    },

    last_name: {
      type: String,
      required: false,
    },

    email: {
      type: String,
      required: false,
    },

    nickname: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: false,
      default:
        "https://www.adl-logistica.org/wp-content/uploads/2019/07/imagen-perfil-sin-foto-300x300.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Usuario", usuarioSchema);
