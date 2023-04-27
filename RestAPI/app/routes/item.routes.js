module.exports=app=>{
    const items = require("../controllers/item.controller");
    var router = require("express").Router();
    
    router.post("/",items.create);

    app.use('/api/items',router);


}