import { useState, type CSSProperties } from "react";
import { Smartphone } from "lucide-react";
import "./PhoneFrame.css";

type PhoneFrameProps = {
  src: string;
  label: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
};

// Moldura de celular feita em CSS.
// Se a imagem ainda não existir, mostra um espaço reservado com o nome da tela.
export function PhoneFrame({ src, label, className = "", style, priority }: PhoneFrameProps) {
  // Guarda qual imagem falhou: se o src mudar, a nova é tentada de novo.
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const missing = failedSrc === src;

  return (
    <div className={`phone ${className}`} style={style}>
      <div className="phone-screen">
        <span className="phone-island" aria-hidden="true" />

        <div className="phone-status" aria-hidden="true">
          <span>9:41</span>
          <span className="phone-battery" />
        </div>

        {missing ? (
          <div className="phone-placeholder" role="img" aria-label={label}>
            <Smartphone size={26} strokeWidth={1.6} aria-hidden="true" />
            <span className="phone-placeholder-label">{label}</span>

            {/* Só aparece rodando localmente (npm run dev), para lembrar o nome do arquivo */}
            {import.meta.env.DEV && <code className="phone-placeholder-file">public{src}</code>}
          </div>
        ) : (
          <img
            src={src}
            alt={label}
            loading={priority ? "eager" : "lazy"}
            onError={() => setFailedSrc(src)}
          />
        )}
      </div>
    </div>
  );
}
