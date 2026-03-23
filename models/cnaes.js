const {DataTypes } = require('sequelize');
const sequelize = require('../connection');


const Cnae = sequelize.define('Cnae', {
    codigo: {
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING,
    }

},
{
    tableName: 'cnaes',
    freezeTableName: true,
    timestamps: false,
}

);

module.exports = Cnae;