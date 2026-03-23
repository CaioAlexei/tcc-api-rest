const {DataTypes } = require('sequelize');
const sequelize = require('../connection');
const Empresa = require('./empresas');


const Socio = sequelize.define('Socio', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    
    cnpj_basico: {
        type: DataTypes.STRING,

    },
    identificador_socio: {
        type: DataTypes.STRING,
    },
    nome_razao_social:{
        type: DataTypes.STRING,
        
    },
    cnpj_cpf_socio:{
        type: DataTypes.STRING,
    },
    qualificacao_socio:{
        type: DataTypes.STRING,
    },
    data_entrada_sociedade:{
        type: DataTypes.STRING,
    },
    pais:{
        type: DataTypes.STRING,
    },
    representante_legal:{
        type: DataTypes.STRING,
    },
    nome_representante:{
        type: DataTypes.STRING,
    },
    qualificacao_representante:{
        type: DataTypes.STRING,
    },
    faixa_etaria:{
        type: DataTypes.STRING,
    }


},
{
    tableName: 'socios',
    freezeTableName: true,
    timestamps: false,
}

);

module.exports = Socio;