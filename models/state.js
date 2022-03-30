var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const district = require("./district");
const confiq = require("../config/config").get(process.env.NODE_ENV);
const salt = 10;

const stateSchema = mongoose.Schema({
  state: {
    type: String,
    required: true,
    maxlength: 50,
  },
  district: [
    {
      type: String,
      required: false,
    },
  ],
});

module.exports = mongoose.model("State", stateSchema);
