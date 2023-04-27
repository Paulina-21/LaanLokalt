module.exports = (sequelize, Sequelize) => {

    const Item = sequelize.define("item", {
    
        title: {
            
            type: Sequelize.STRING
            
            },
            
        description: {
            
            type: Sequelize.STRING
            
            },
            
        image: {
            
            type: Sequelize.STRING
            
            },

        itemType: {

                type: Sequelize.INTEGER 

            },

        filterTag: {

                type: Sequelize.INTEGER

            },

        address: {

                type: Sequelize.STRING

            },

        userId: {

            type: Sequelize.INTEGER 

            },

        price: {

                type: Sequelize.INTEGER

            }
            
        });
    
    
    
    
        return Item;
    
    };