const express = require("express")
const path = require("path")

const app = express ()

const caminhoBase = path.join(__dirname,"templates") 

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastrar/salvar',(requisicao, resposta) => {
    const nome = requisicao.body.nome
    const email = requisicao.body.email
    const senha = requisicao.body.senha
})

app.get('/cadastrar',(requisiçao, resposta)=> {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)

})

app.get('/usuarios/:id',(requisiçao, resposta) => {
    const id= requisicao.params.id
    resosta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
 
})

app.Listen (3000, () => {
    console. log ("Servidor rodando na porta 3000!")
})