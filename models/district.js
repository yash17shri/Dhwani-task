var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const confiq = require("../config/config").get(process.env.NODE_ENV);
const salt = 10;

const districtSchema = mongoose.Schema({
  district: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

module.exports = mongoose.model("District", districtSchema);
