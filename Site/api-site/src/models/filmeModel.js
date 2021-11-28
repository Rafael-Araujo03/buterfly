var database = require("../database/config")

function cadastrarFilme(fkUsuario, nomeFilme) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeFilme);
    var instrucao = `
    insert into efeitoBorboleta (fkUsuario,fkFilmes) values
        (${fkUsuario}, (select id from filmes where nome = '${nomeFilme}'));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function metrica() {
    var instrucao = `select 
	count(*) as contagem,
    f.nome
    from filmes f join efeitoBorboleta eb on f.id = eb.fkFilmes
    group by f.nome
    order by count(*) desc`

    return database.executar(instrucao);
}

module.exports = {
    cadastrarFilme,
    metrica
};