const http = require('http');

function server() {
    const port = 3000;

    const requestHandler = (request, response) => {
        response.end('Hello, World!');
    };

    const server = http.createServer(requestHandler);

    server.listen(port, (err) => {
        if (err) {
            return console.error('Error starting server:', err);
        }

        console.log(`Server is listening on port ${port}`);
    });
}

module.exports = server;