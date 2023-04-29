module.exports = app => {
    const users = require("../controllers/user.controller");
    var router = require("express").Router();

    // Create a new user
    router.post("/", users.createUser);

    // Retrieve all users
    router.get("/", users.findAllUsers);

    // Retrieve a user by id
    router.get("/:id", users.findOneUser);

    // Delete a user by id
    router.delete("/:id", users.deleteUser);

    // Delete all users
    router.delete("/", users.deleteAllUsers);

    // Update a user with id
    router.put("/:id", users.updateUser);

    app.use('/api/users', router);
}