const {DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Estabelecimento = require('./estabelecimentos');
const Socio = require('./socios');
const Simples = require('./dados_do_simples');




const Empresa = sequelize.define('Empresa', {
    cnpj_basico: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    razao_social: {
        type: DataTypes.STRING,
    },
    natureza_juridica:{
        type: DataTypes.STRING,
    },
    qualificacao_responsavel:{
        type: DataTypes.STRING,
    },
    capital_social:{
        type: DataTypes.STRING,
    },
    porte_empresa:{
        type: DataTypes.STRING,
    },
    ente_federativo_responsavel: {
        type: DataTypes.STRING,
    }
},
{
    tableName: 'empresas',
    freezeTableName: true,
    timestamps: false,
});

Empresa.hasMany(Estabelecimento, {
    foreignKey: 'cnpj_basico',
    sourceKey: 'cnpj_basico',
});

Empresa.hasMany(Socio, {
    foreignKey: 'cnpj_basico',
    sourceKey: 'cnpj_basico',
});

 Empresa.hasOne(
    Simples,{
        foreignKey: 'cnpj_basico',
        sourceKey: 'cnpj_basico',
    }
 );

module.exports = Empresa;