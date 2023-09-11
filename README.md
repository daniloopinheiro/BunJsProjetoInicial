# Framework *Bun* Inicializando uma Demo

## Execução e Base do Código

index.js
```javascript
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Bun Projeto Incial!");
  },
});

console.log(`Servidor Ativo em Localhost:${server.port}`);
```

$ bun run index.tsx

[Fonte](https://bun.sh/)
