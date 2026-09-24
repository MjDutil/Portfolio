// Copia o index.html para 404.html depois do build.
// Em hospedagens estáticas como o GitHub Pages, isso faz links diretos
// (ex.: /projetos/geoshield) abrirem o site em vez de uma página de erro.
import { copyFileSync } from "node:fs";

copyFileSync("dist/index.html", "dist/404.html");
console.log("404.html criado para as rotas do site.");
