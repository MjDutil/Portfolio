# Maria Júlia Dutil · Portfólio

Portfólio pessoal de desenvolvimento frontend, em português e inglês.

**Stack:** React 19 · TypeScript · Vite · React Router

## Rodando localmente

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a versão de produção em dist/
npm run preview  # abre a versão de produção localmente
```

## Estrutura

```
src/
  components/   seções da página inicial (Header, Hero, Projects, Toolbox, Contact, Footer)
  pages/        estudos de caso dos projetos (ex.: GeoShield)
  data/         textos do site em PT e EN (translations.ts)
  context/      troca de idioma
public/
  projects/     capturas de tela dos projetos
  og-image.jpg  imagem de prévia do link em redes sociais
```

Todos os textos ficam em `src/data/translations.ts`, então para mudar uma frase não é preciso mexer nos componentes.

## Publicação

O build gera também um `404.html` (cópia do `index.html`), para que links diretos como `/projetos/geoshield` funcionem em hospedagens estáticas como o GitHub Pages.

## Telas do DU

A página `/projetos/du` já está pronta e mostra espaços reservados até as imagens existirem.
Salve os prints (em pé, do jeito que aparecem no celular) em `public/projects/du/` com estes nomes:

| Arquivo                                         | Tela                                                                     |
| ----------------------------------------------- | ------------------------------------------------------------------------ |
| `home.png`                                      | Buscar motoristas (celular do meio, no topo e na capa da home)           |
| `chat.png`                                      | Lista de conversas                                                       |
| `tracking.png`                                  | Rastreamento da corrida                                                  |
| `finish.png`                                    | Finalização + avaliação                                                  |
| `signup-1-invite.png` … `signup-7-password.png` | Cadastro: convite, nome, apelido, contato, tratamento, nascimento, senha |
| `offer-1-driver.png` … `offer-6-price.png`      | Oferecer carona: CNH, carro, rota, datas, vagas, valor                   |

Os nomes completos, as cores do app, o trecho de código opcional e o link do repositório ficam em `src/data/du.ts`.
Rodando `npm run dev`, cada espaço reservado mostra o caminho do arquivo que está faltando.
