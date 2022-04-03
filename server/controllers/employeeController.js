const asyncHandler = require("express-async-handler");

const Employee = require("../models/employeeModel");

const getEmployees = asyncHandler(async (req, res) => {
   const employees = await Employee.find({});
   res.status(200).json(employees);
});

const getEmployee = asyncHandler(async (req, res) => {
   const employee = await Employee.findById(req.params.id);
   res.status(200).json(employee);
});

const createEmployee = asyncHandler(async (req, res) => {
   if (
      !req.body.name ||
      !req.body.email ||
      !req.body.age ||
      !req.body.position ||
      !req.body.salary
   ) {
      return res.status(400).json({
         success: false,
         message: "Please enter all required fields",
      });
   }
   const employee = await Employee.create(req.body);
   res.status(201).json(employee);
});

const updateEmployee = asyncHandler(async (req, res) => {
   const employee = await Employee.findById(req.params.id);
   if (!employee) {
      return res.status(404).json({
         success: false,
         message: "Employee not found",
      });
   }

   const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
         new: true,
         runValidators: true,
      }
   );

   res.status(201).json(updatedEmployee);
});

const deleteEmployee = asyncHandler(async (req, res) => {
   const employee = await Employee.findById(req.params.id);

   if (!employee) {
      return res.status(404).json({
         success: false,
         message: "Employee not found",
      });
   }

   await employee.remove();

   res.status(200).json({
      success: true,
      message: "Employee deleted successfully",
   });
});

module.exports = {
   getEmployees,
   getEmployee,
   createEmployee,
   updateEmployee,
   deleteEmployee,
};
