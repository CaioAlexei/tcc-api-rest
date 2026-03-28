require('dotenv').config();
const express = require('express');
const app = express();
const Empresa = require('./models/empresas');
const Estabelecimento = require('./models/estabelecimentos');
const Socio = require('./models/socios');
const Simples = require('./models/dados_do_simples');


const api_port = process.env.API_PORT;


app.use(express.json());

// Testar conexão ao iniciar

app.listen(api_port, () => {
    console.log('Servidor rodando na porta 3005');
});

app.get('/', (res) => {
    res.send('API TCC');
});

app.get('/empresas', async (req, res) => {
    const {cnpj,estabelecimentos,socios,simples} = req.query;


    let joins = [];

    if (!cnpj){                                                               
        return res.status(400).json({ erro: "Forneça ao menos um filtro (CNPJ)" });
    };

    if(estabelecimentos == 1){
        joins.push({ model: Estabelecimento });
    };
    if(socios == 1){
        joins.push({ model: Socio });
    };
    if(simples == 1){
        joins.push({ model: Simples });
    };

    try {
            
            const lista = await Empresa.findByPk(cnpj,{
            include: joins,
            logging: false,
        });
            res.json(lista);

        } catch (erro) {
            console.log(erro);
            res.status(500).json({ erro: 'Erro ao buscar' });
        }
});
