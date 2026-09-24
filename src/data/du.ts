// =====================================================================
// DU — CONFIGURAÇÃO DAS TELAS DO ESTUDO DE CASO
//
// Como adicionar as telas:
// 1. Tire prints do app em pé (ex.: npm run web + modo celular do DevTools).
// 2. Salve na pasta public/projects/du/ com os nomes abaixo.
// 3. Pronto: cada celular da página troca o espaço reservado pela imagem.
//
// Prefere outro nome ou formato (.webp, .jpg)? Mude só o caminho aqui.
// Enquanto a imagem não existir, a página mostra um espaço reservado.
// =====================================================================

const folder = "/projects/du";

export const duScreens = {
  // Celulares do topo da página
  home: `${folder}/home.png`, // Buscar motoristas
  chat: `${folder}/chat.png`, // Lista de conversas
  tracking: `${folder}/tracking.png`, // Rastreamento da corrida

  // Parada 01 — ponto de partida
  invite: `${folder}/signup-1-invite.png`,

  // Parada 03 — cadastro em 7 etapas (na ordem do app)
  signup: [
    `${folder}/signup-1-invite.png`,
    `${folder}/signup-2-name.png`,
    `${folder}/signup-3-nickname.png`,
    `${folder}/signup-4-contact.png`,
    `${folder}/signup-5-treatment.png`,
    `${folder}/signup-6-birthdate.png`,
    `${folder}/signup-7-password.png`,
  ],

  // Parada 04 — oferecer carona em 6 etapas (na ordem do app)
  offer: [
    `${folder}/offer-1-driver.png`,
    `${folder}/offer-2-car.png`,
    `${folder}/offer-3-route.png`,
    `${folder}/offer-4-dates.png`,
    `${folder}/offer-5-passengers.png`,
    `${folder}/offer-6-price.png`,
  ],

  // Parada 05 — desenvolvimento
  finish: `${folder}/finish.png`, // Finalização + avaliação
};

// Cores do app (copie de src/theme/tokens.ts do DU).
// Enquanto a lista estiver vazia, as amostras de cor não aparecem.
// Exemplo: { hex: "#6C4CE0", name: "Primária" },
export const duPalette: Array<{ hex: string; name: string }> = [];

// Trecho de código opcional para a parada 05 (ex.: o useAuthStore com Zustand).
// Cole o código entre as crases. Vazio = a janela de código não aparece.
export const duCode = {
  file: "src/store/useAuthStore.ts",
  code: ``,
};

// Link do repositório do DU. Vazio = o botão do GitHub não aparece.
export const duRepository = "";
