const express = require ('express');

const server = express();

//localhost:8080/curso
const serverPort = "8080"
const path = "/curso/:id"

server.get(path , (req, res) => {
    console.log('Rota Acessada -> localhost:'+serverPort+path);
    const id = req.params.id;

    return res.json({
        curso: `Route: localhost:`+serverPort+path,
        nome: `CursoID => ${id}`
    });
})

server.listen(serverPort);
