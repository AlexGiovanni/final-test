// this file makes the database connection, collects all the models
// and sets the associations
// other files can use this for database access by requiring it and
// assigning the exports

// assuming that this file (index.js) is in a subdirectory called models:
//  const models = require('./models');

// or (using deconstruction):
//  const { Person, PhoneNumber, Address, PersonAddress } = require('./models');

'use strict';

// database connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'users.sqlite'
});

// import models
//const User = sequelize.import("./users.js");
//const Job = sequelize.import("./jobs.js");
const Applied_Job = sequelize.import("./applied_jobs.js");
const Employer = sequelize.import("./employers.js");
const Posted_Job = sequelize.import("./posted_jobs")
const Employee = sequelize.import("./employees.js");
/*
// associations
Employer.hasMany(PostedJobs, {foreignKey: "employer_id"});
PostedJobs.belongsTo(Employer, {foreignKey: "employer_id"});

Employee.hasMany(Applied_Job, {foreignKey: "employee_id"});
Applied_Job.belongsTo(Employee, {foreignKey: "employee_id"});
*/

 Employee.hasMany(Applied_Job, {foreignKey: "employee_id", as: "employeeId"});
 Applied_Job.belongsTo(Employee, {foreignKey: "employee_id"});

 Employer.hasMany(Posted_Job, {foreignKey: "id", as: "ID"});
 Posted_Job.belongsTo(Employee, {foreignKey: "id"});

module.exports = {
   Applied_Job, Employer, Posted_Job, Employee
};

