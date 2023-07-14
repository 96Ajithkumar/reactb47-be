// Simple web Server
const http = require('http');

let notes =[
    {
        id: 1,
        content: 'backend server using Nodejs',
        imortant: true
    },
    {
        id: 2,
        content: 'backendrestful using nodejs will grow complex',
        importent: false
    },
    {
        id: 3,
        content: 'express makes backend restful painless',
        importent: true
    }
];


const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify(notes));
});
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);