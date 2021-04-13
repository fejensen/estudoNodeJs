const express = require ('express');
const server = express();

server.use(express.json());

//localhost:8080/boards
const serverPort = "8080"
const pathIndex = "/boards/:index"
const path = "/boards"

//Query params = ?nome=NodeJS
//Route params = boards/2
//Request Body = {nome:'NodeJs', tipo: 'Backend'}

const motherBoards = [
    'B350', 
    'B360', 
    'B450', 
    'B460', 
    'X470', 
    'B550', 
    'B560', 
    'Z490', 
    'X570' 
];

server.get('/boards', (req, res) => {
    return res.json(motherBoards)
})

//Create
server.post(path, (req, res) =>{
    const {name} =  req.body;

    motherBoards.push(name);

    return res.json(motherBoards)
})

//Read
server.get(pathIndex , (req, res) => {
    //const id = req.params.id;
    const { index } = req.params;

    return res.json(motherBoards[index]);
})

//Update
server.put(pathIndex, (req, res) =>{
    const { index } =  req.params;
    const { name } = req.body;

    motherBoards[index] = name;

    return res.json(motherBoards);
})

//Delete
server.delete(pathIndex, (req, res)=>{
    const {index} = req.params;

    motherBoards.splice(index, 1);

    return res.json(motherBoards);

})


server.listen(serverPort);
