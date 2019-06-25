const Sequelize = require("sequelize");

const sequelize = new Sequelize("GoMarket", "root", "1111", {

    host: "localhost",
    dialect: "mysql",
    logging: false
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
    phoneNumber: { type: Sequelize.INTEGER, required: true, unique: true }
 })

 const Employee = sequelize.define('employee', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: Sequelize.STRING, required: true, unique: true },
    username: { type: Sequelize.STRING, required: true, unique: true },
    password: { type: Sequelize.STRING, required: true },
    phoneNumber: { type: Sequelize.INTEGER, required: true, unique: true },
 })

 const Cart = sequelize.define('cart', {
   id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
   name: { type: Sequelize.STRING, required: true },
   price: { type: Sequelize.INTEGER, required: true },
 })

 const Orders = sequelize.define('order', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
 })

 const Messages = sequelize.define('message', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  message: { type: Sequelize.STRING, required: false },
 })

const Electronics = sequelize.define('electronics', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
  image: { type: Sequelize.STRING, required: true }
})

const Groceries = sequelize.define('groceries', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
  image: { type: Sequelize.STRING, required: true }
})

const Gym = sequelize.define('gym', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
  image: { type: Sequelize.STRING, required: true }
})

const Hotdeals = sequelize.define('hotdeals', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
  image: { type: Sequelize.STRING, required: true }
})

const Newarrivals = sequelize.define('newarrivals', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
  image: { type: Sequelize.STRING, required: true },
})

const Slider = sequelize.define('slides', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
  image: { type: Sequelize.STRING, required: true }
})

const HouseHold = sequelize.define('households', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
  image: { type: Sequelize.STRING, required: true } 
})
 
const Game = sequelize.define('games', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: Sequelize.STRING, required: true },
  price: { type: Sequelize.INTEGER, required: true },
  image: { type: Sequelize.STRING, required: true } 
})

 sequelize.sync();

 module.exports.User = User;
 module.exports.Employee = Employee;
 module.exports.Cart = Cart;
 module.exports.Orders = Orders;
 module.exports.Messages = Messages;
 module.exports.Electronics = Electronics;
 module.exports.Groceries = Groceries;
 module.exports.Gym = Gym;
 module.exports.Newarrivals = Newarrivals;
 module.exports.Hotdeals = Hotdeals;
 module.exports.Slider = Slider;
 module.exports.HouseHold = HouseHold;
 module.exports.Game = Game