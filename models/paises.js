const {DataTypes } = require('sequelize');
const sequelize = require('../connection');


const Pais = sequelize.define('Pais', {
    codigo: {
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING,
    }



},
{
    tableName: 'paises',
    freezeTableName: true,
    timestamps: false,
}

);

module.exports = Pais;