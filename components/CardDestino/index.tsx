import Link from "next/link";
import { Destino } from "@/data/destinos";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
  index?: number;
}
{/* @ts-ignore */}
const Arrow = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
)

export default function CardDestino({ destino, index = 0 }: CardDestinoProps) {
  return (
    <Link
      href={`/destinos/${destino.slug}`}
      className={styles.card}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={styles.imageWrapper}>
        <img
          src={destino.imagem}
          alt={destino.nome}
          className={styles.image}
          loading="lazy"
        />
        <div
          className={styles.colorBar}
          style={{ background: destino.cor }}
        />
        <span className={styles.continente}>{destino.continente}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.nome}>{destino.nome}</h3>
          <span className={styles.pais}>{destino.pais}</span>
        </div>
        <p className={styles.descricao}>{destino.descricao}</p>
        <div className={styles.footer}>
          <span className={styles.cta}>
            Explorar
            <Arrow />
          </span>
        </div>
      </div>
    </Link>
  );
}
