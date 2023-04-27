const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

// Create and Save a new item
exports.create = (req, res) => {
    // validate request
    if (!req.body.title) {
        res.status(400).send(
            { message: "content cannot be empty!" }
        );
        return;
    }

    // create  an item
    const item = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        itemType: req.body.type,
        filterTag: req.body.filterTag,
        address: req.body.address,
        userId: req.body.userId,
        price: req.body.price
    }
    Item.create(item).then(data => { res.send(data); })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Some error accurred while trying to create an item."
            });
        });
}

// Retrieve all items from the database.
exports.findAllItems = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Item.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving items."
            });
        });

};

// Delete an item with the specified id in the request
exports.deleteItem = (req, res) => {
    const id = req.params.id;

    Item.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Item was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete item with id=${id}. Maybe Item was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete item with id=" + id
            });
        });

};

// Delete all items from the database.
exports.deleteAllItems = (req, res) => {
    Item.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Items were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all items."
            });
        });

};
