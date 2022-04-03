const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   age: {
      type: Number,
      required: true,
   },
   position: {
      type: String,
      required: true,
   },
   salary: {
      type: Number,
      required: true,
   },
   hireDate: {
      type: Date,
   },
});

module.exports = mongoose.model("Employee", employeeSchema);
