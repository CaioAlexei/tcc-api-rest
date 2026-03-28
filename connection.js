const { Sequelize } = require('sequelize')

const dbHostUrl = process.env.DB_HOST_URL;
const dbPort = process.env.DB_PORT;
const dbDatabase = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbDialect = process.env.DB_DIALECT;




const sequelize = new Sequelize(dbDatabase,dbUsername,dbPassword,{
    host:dbHostUrl,
    dialect:dbDialect,
    port: dbPort,
    logging: false,
    pool: {
    max: 60,     // Máximo de conexões abertas simultaneamente
    min: 10,      // Mínimo (pode fechar todas se ninguém usar)
    acquire: 30000, // Tempo máximo (ms) tentando pegar uma conexão antes de dar erro
    idle: 10000     // Tempo (ms) que uma conexão pode ficar inativa antes de ser fechada
  }
})

module.exports = sequelize;
