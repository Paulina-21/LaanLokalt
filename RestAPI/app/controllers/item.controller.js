const db=require("../models");
const Item = db.items;
const Op = db.Sequelize.Op;


exports.create=(req,res)=>{
    // validate request
    if(!req.body.title){
        res.status(400).send(
            {message:"content cannot be empty!"}
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
    Item.create(item).then(data=>{res.send(data);})
    .catch(error=>{
        res.status(500).send({
        message: error.message||"Some error accurred while trying to create an item."
        });
    });
}
