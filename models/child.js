var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const confiq = require("../config/config").get(process.env.NODE_ENV);
const salt = 10;

const childSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  sex: {
    type: String,
    required: true,
    maxlength: 15,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  fathername: {
    type: String,
    required: true,
    maxlength: 100,
  },
  mothername: {
    type: String,
    required: true,
    maxlength: 100,
  },
  state: {
    type: String,
    required: true,
    maxlength: 50,
  },
  district: {
    type: String,
    required: true,
    maxlength: 50,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Child", childSchema);
