const {DataTypes } = require('sequelize');
const sequelize = require('../connection');


const Qualificacao_socio = sequelize.define('Qualificacao_socio', {
    codigo: {
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING,
    }



},
{
    tableName: 'qualificacoes_socios',
    freezeTableName: true,
    timestamps: false,
}

);

module.exports = Qualificacao_socio;