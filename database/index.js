const Sequelize = require("sequelize");

const sequelize = new Sequelize("GoMarket", "root", "1111", {

    host: "localhost",
    dialect: "mysql"
  });

sequelize.authenticate()
 .then(() => console.log('Database Connected!'))
 .catch(err => console.log('Error: ' + err))

 //Schemas

 const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: Sequelize.STRING, required: true, unique: true },
    username: { type: Sequelize.STRING, required: true, unique: true },
    password: { type: Sequelize.STRING, required: true },
    location: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.INTEGER, required: true, unique: true },
 })

 const Employee = sequelize.define('employee', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: Sequelize.STRING, required: true, unique: true },
    username: { type: Sequelize.STRING, required: true, unique: true },
    password: { type: Sequelize.STRING, required: true },
    location: { type: Sequelize.STRING },
    phoneNumber: { type: Sequelize.INTEGER, required: true, unique: true },
    rating: { type: Sequelize.INTEGER }
 })

 Employee.hasMany(User);

 sequelize.sync();

 module.exports.User = User;
 module.exports.Employee = Employee;