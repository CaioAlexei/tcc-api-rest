const {DataTypes } = require('sequelize');
const sequelize = require('../connection');


const Natureza_juridica = sequelize.define('Natureza_juridica', {
    codigo: {
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING,
    }



},
{
    tableName: 'naturezas_juridicas',
    freezeTableName: true,
    timestamps: false,
}

);

module.exports = Natureza_juridica;