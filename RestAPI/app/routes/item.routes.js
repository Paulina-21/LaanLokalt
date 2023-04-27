module.exports = app => {
    const items = require("../controllers/item.controller");
    var router = require("express").Router();

    // Create a new item
    router.post("/", items.create);

    // Retrieve all items
    router.get("/", items.findAllItems);

    // Retrieve all items
    router.get("/:id", items.findOneItem);

    // Delete an item with id
    router.delete("/:id", items.deleteItem);

    // Delete all items
    router.delete("/", items.deleteAllItems);

    app.use('/api/items', router);


}