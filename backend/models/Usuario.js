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
    coins: {
      type: Number,
      required: false,
      default: 10,
    },
    photo: {
      type: String,
      required: false,
      default:
        "data:image/jpeg;base64,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",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Usuario", usuarioSchema);
