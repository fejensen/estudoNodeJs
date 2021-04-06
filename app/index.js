const express = require ('express');

const server = express();

//localhost:8080/curso
const serverPort = "8080"
const path = "/curso/:index"

//Query params = ?nome=NodeJS
//Route params = curso/2
//Request Body = {nome:'NodeJs', tipo: 'Backend'}

const motherBoards = ['B350', 'B360', 'B450', 'B460', 'X470', 'B550', 'B560', 'Z490', 'X570' ];

server.get(path , (req, res) => {
    
    //const id = req.params.id;
    const {index} = req.params;
    return res.json(motherBoards[index]);
})

server.listen(serverPort);
