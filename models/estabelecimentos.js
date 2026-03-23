const {DataTypes } = require('sequelize');
const sequelize = require('../connection');


const Estabelecimento = sequelize.define('Estabelecimento', {
    cnpj_basico: {
        type: DataTypes.STRING,
        primaryKey: true,

    },
    cnpj_ordem:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    cnpj_dv:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    identificador_matriz_filial:{
        type: DataTypes.STRING,
    },
    nome_fantasia:{
        type: DataTypes.STRING,
    },
    situacao_cadastral:{
        type: DataTypes.STRING,
    },
    data_situacao_cadastral:{
        type: DataTypes.STRING,
    },
    motivo_situacao_cadastral:{
        type: DataTypes.STRING,
    },
    nome_cidade_exterior:{
        type: DataTypes.STRING,
    },
    pais:{
        type: DataTypes.STRING,
    },
    data_inicio_atividade:{
        type: DataTypes.STRING,
    },
    cnae_fiscal_principal:{
        type: DataTypes.STRING,
    },
    cnae_fiscal_secundaria:{
        type: DataTypes.STRING,
    },
    tipo_logradouro:{
        type: DataTypes.STRING,
    },
    logradouro:{
        type: DataTypes.STRING,
    },
    numero:{
        type: DataTypes.STRING,
    },
    complemento:{
        type: DataTypes.STRING,
    },
    bairro:{
        type: DataTypes.STRING,
    },
    cep:{
        type: DataTypes.STRING,
    },
    uf:{
        type: DataTypes.STRING,
    },
    municipio:{
        type: DataTypes.STRING,
    },
    ddd_1:{
        type: DataTypes.STRING,
    },
    telefone_1:{
        type: DataTypes.STRING,
    },
    ddd_2:{
        type: DataTypes.STRING,
    },
    telefone_2:{
        type: DataTypes.STRING,
    },
    ddd_fax:{
        type: DataTypes.STRING,
    },
    fax:{
        type: DataTypes.STRING,
    },
    correio_eletronico:{
        type: DataTypes.STRING,
    },
    situacao_especial:{
        type: DataTypes.STRING,
    },
    data_situacao_especial:{
        type: DataTypes.STRING,
    }


},
{
    tableName: 'estabelecimentos',
    freezeTableName: true,
    timestamps: false,
}

);



module.exports = Estabelecimento;