const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response("Bun!");
    },
});

console.log(`Listening on https://localhost:${server.port}...`);