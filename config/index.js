'use strict'

var all = {
    sequelize:{
        username: 'root',
        password: 'root',
        database: 'gaea',
        host: "192.168.51.14",
        dialect: 'mysql',
        define: {
            underscored: false,
            timestamps: true,
            paranoid: true
        }
    }
};

module.exports = all;