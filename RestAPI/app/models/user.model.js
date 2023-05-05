//create model for user using sequelize
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNo: {
            type: Sequelize.STRING
        },
        homeAddress: {
            type: Sequelize.STRING
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    return User;
};