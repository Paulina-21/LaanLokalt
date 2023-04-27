module.exports = app => {
    const items = require("../controllers/item.controller");
    var router = require("express").Router();

    // Create a new item
    router.post("/", items.create);

    // Retrieve all items
    router.get("/", items.findAllItems);

    // Retrieve all food items
    router.get("/food", items.getItemsByType);

    // Retrieve all resource items
    router.get("/resources", items.getItemsByType);

    // Retrieve all pets and plants items
    router.get("/petsplants", items.getItemsByType);

    // Retrieve item item by id
    router.get("/:id", items.findOneItem);

    // Delete an item with id
    router.delete("/:id", items.deleteItem);

    // Delete all items
    router.delete("/", items.deleteAllItems);

    // Update an item
    router.put("/:id", items.updateItem);

    app.use('/api/items', router);


}