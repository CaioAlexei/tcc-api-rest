const {DataTypes } = require('sequelize');
const sequelize = require('../connection');


const Municipio = sequelize.define('Municipio', {
    codigo: {
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING,
    }



},
{
    tableName: 'municipios',
    freezeTableName: true,
    timestamps: false,
}

);

module.exports = Municipio;