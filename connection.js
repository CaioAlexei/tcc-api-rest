const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('gov_empresas_data','postgres','lima068',{
    host:'localhost',
    dialect:'postgres',
    port: 5432,
    logging: false,
    pool: {
    max: 60,     // Máximo de conexões abertas simultaneamente
    min: 10,      // Mínimo (pode fechar todas se ninguém usar)
    acquire: 30000, // Tempo máximo (ms) tentando pegar uma conexão antes de dar erro
    idle: 10000     // Tempo (ms) que uma conexão pode ficar inativa antes de ser fechada
  }
})

module.exports = sequelize;
