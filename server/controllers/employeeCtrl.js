const bcrypt = require('bcrypt');
const db = require('../../database/db');

exports.createEmployee = function(req, res){
    const password = req.body.password;
    const hashedPass = bcrypt.hashSync(password, 10);

    db.Employee.create({
        email: req.body.email,
        username: req.body.username,
        password: hashedPass,
        phoneNumber: req.body.phoneNumber,
        imgUrl: req.body.imgUrl,
        cv: req.body.cv
    })
}

exports.getEmployee = function(req, res){
    db.Employee.findAll({ where: {
        username: req.params.username,
        password: req.params.password
    }}).then(emplyee => {
        return res.send('LoggedIn!', emplyee)
    }).catch(err => {
        res.send(err)
    })
}

exports.updateOne = function(req, res){
    db.Employee.update({ where: {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
    }}).then(() => {
        return res.send('Updated!')
    }).catch(err => {
        res.send(err);
    })
}

exports.deleteOne = function(req, res){
    db.Employee.destroy({ where: {
        username: req.params.username,
        password: req.params.password
    }}).then(() => {
        return res.send('Deleted')
    }).catch(err => {
        res.send(err)
    })
}