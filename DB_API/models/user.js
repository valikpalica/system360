const sequelize = require('../connection');
const {Sequelize} = require('sequelize');
const Ralation_Anceta_User = require('./ralation_anceta_user');

const User = sequelize.define('User',{
    id_user:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Surname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Patronime:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Position:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Rank:{
        type: Sequelize.STRING,
        allowNull: false
    },
    Staff:{
        type: Sequelize.STRING,
        allowNull: false
    },
    institute:{
        type: Sequelize.STRING,
        allowNull: false
    },
    facultet:{
        type: Sequelize.STRING,
        allowNull: false
    },
    specialize:{
        type: Sequelize.STRING,
        allowNull: false
    },
    graduation:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    login:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

User.hasMany(Ralation_Anceta_User,{onDelete:'cascade',foreignKey:'id_user'});

module.exports = User;