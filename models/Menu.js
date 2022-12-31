const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Menu", schema);
