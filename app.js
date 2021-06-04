const http2 = require('http2');
const fs = require('fs');
const server = http2.createSecureServer({
    "key": "",
    "cert": ""
});

server.on("stream", (stream, headers) => {
    stream.respond({
        "content-type": "application/json",
        "status": 200
    });

    stream.end(JSON.stringify({
        "user": "unknown",
        "id": 300
    }))
});