const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Bun Projeto Incial!");
  },
});

console.log(`Servidor Ativo em Localhost:${server.port}`);
