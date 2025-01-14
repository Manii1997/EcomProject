const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  name: {
    type: String,
    requierd: true,
  },
  email: {
    type: String,
    requierd: true,
  },
  password: {
    type: String,
    requierd: true,
  },
  image: {
    type: String,
    requierd: true,
  },
  role: {
    type: String,
    default: "admin",
  },
});

module.exports = model("admins", adminSchema);
