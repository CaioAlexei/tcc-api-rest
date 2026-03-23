const {DataTypes } = require('sequelize');
const sequelize = require('../connection');


const Dados_do_simples = sequelize.define('Dados_do_simples', {
    cnpj_basico: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    opcao_pelo_simples:{
        type: DataTypes.STRING,
    },
    data_opcao_simples:{
        type: DataTypes.STRING,
    },
    data_exclusao_simples:{
        type: DataTypes.STRING,
    },
    opcao_pelo_mei:{
        type: DataTypes.STRING,
    },
    data_opcao_mei:{
        type: DataTypes.STRING,
    },
    data_exclusao_mei:{
        type: DataTypes.STRING,
    }


},
{
    tableName: 'dados_do_simples',
    freezeTableName: true,
    timestamps: false,
}

);

module.exports = Dados_do_simples;