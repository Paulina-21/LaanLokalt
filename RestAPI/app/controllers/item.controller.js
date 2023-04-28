const db = require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;

// Create and Save a new item
exports.createItem = (req, res) => {
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

/**
 * Get all items of one itemType.
 * Type is taken from the request path.
 * Path options: food, resouces, petsplants
 */
exports.getItemsByType = (req, res) => {
    let type = getItemTypeFromPath(req.path);

    Item.findAll({
        where: {
            itemType: type
        }
    })
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

// Find all items by userId
exports.getItemsByUserId = (req, res) => {

    Item.findAll({ where: {
        userId: req.params.userId
    } })
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

// Find a single item with an id
exports.findOneItem = (req, res) => {
    const id = req.params.id;

    Item.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving item with id=" + id
            });
        });

};

// Delete an item with the specified id in the request
exports.deleteItem = (req, res) => {
    const id = req.params.id;

    Item.destroy({ where: { id: id } }).then(num => {
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

/**
 * Updates one item by it's id.
 * Returns the updated item.
 */
exports.updateItem = (req, res) => {
    Item.update({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        itemType: req.body.type,
        filterTag: req.body.filterTag,
        address: req.body.address,
        userId: req.body.userId,
        price: req.body.price
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if (result == 1) {
                Item.findByPk(req.params.id)
                    .then(data => {
                        res.status(200).send(data);
                    })
                    .catch(error => {
                        res.status(400).send('Could not get the updated item due to an error. ' + error.message);
                    })
            }
            else {
                res.satus(400).send('An error occurred during update.')
            }
        })
        .catch(error => {
            res.status(400).send({
                message: error.message || "An error occured during update."
            })
        })
}

function getItemTypeFromPath(path) {
    let type = path.split('/').pop();
    switch (type) {
        case 'food':
            return 1;
        case 'resources':
            return 2;
        case 'petsplants':
            return 3;
        default:
            return;
    }
}
