const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

//login user and create session
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
}

// Create and Save a new user
exports.create = (req, res) => {
    // validate request
    if (!req.body.email) {
        res.status(400).send(
            { message: "content cannot be empty!" }
        );
        return;
    }

    // create  an user
    const user = {
        email: req.body.email,
        password: req.body.password,
        phoneNo: req.body.phoneNo,
        homeAddress: req.body.homeAddress
    }
    User.create(user).then(data => { res.send(data); })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error accurred while trying to create an user."
            });
        });
}

//delete user by id if user is logged in as admin or user is logged in as the user to be deleted
exports.deleteUser = (req, res) => {
    const id = req.params.id;

    if (req.session.isAdmin || User.id == id) {
        User.destroy({ where: { id: id } }).then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete user with id=${id}. Maybe user was not found!`
                });
            }
        }).catch(error => {
            res.status(500).send({
                message: "Could not delete user with id=" + id
            });
        });
    } else {
        res.status(500).send({
            message: "Could not delete user with id=" + id
        });
    }
}

// Retrieve all users from the database.
exports.findAllUsers = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });

}

// Retrieve a single user with an id
exports.findOneUser = (req, res) => {
    const id = req.params.id;

    User.findByPk(id).then(data => {
        res.send(data);
    }).catch(error => {
        res.status(500).send({
            message: "Error retrieving user with id=" + id
        });
    });
}

// Update a user by the id in the request
exports.updateUser = (req, res) => {
    const id = req.params.id;

    User.update(req.body, { where: { id: id } }).then(num => {
        if (num == 1) {
            res.send({
                message: "User was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`
            });
        }
    }).catch(error => {
        res.status(500).send({
            message: "Error updating user with id=" + id
        });
    });
}

// Delete all users from the database if user is logged in as administrator
exports.deleteAllUsers = (req, res) => {
    if (req.session.isAdmin == true) {
        User.destroy({ where: {}, truncate: false }).then(nums => {

            res.send({ message: `${nums} users were deleted successfully!` });
        }).catch(error => {
            res.status(500).send({
                message: error.message || "Some error occurred while removing all users."
            });
        });
    } else {
        res.status(500).send({
            message: "Could not delete all users"
        });
    }
}
