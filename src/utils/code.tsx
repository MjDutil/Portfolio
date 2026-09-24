import type { ReactNode } from "react";

// Numeração com dois dígitos: 1 → "01".
export const pad = (n: number) => String(n).padStart(2, "0");

// Destaque de sintaxe simples para os trechos de código das páginas de projeto.
// O padrão precisa ter a flag "g" e quatro grupos, nesta ordem:
// comentário, texto (string), palavra-chave e número.
export function highlightLine(line: string, pattern: RegExp): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const match of line.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) parts.push(line.slice(last, index));

    const className = match[1]
      ? "tok-comment"
      : match[2]
        ? "tok-string"
        : match[3]
          ? "tok-keyword"
          : "tok-number";

    parts.push(
      <span key={index} className={className}>
        {match[0]}
      </span>
    );
    last = index + match[0].length;
  }

  if (last < line.length) parts.push(line.slice(last));
  return parts;
}
