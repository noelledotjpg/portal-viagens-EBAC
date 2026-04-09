import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "./page.module.css";
import { destinos } from "@/data/destinos";

{/* @ts-ignore */}
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
)

export default function Home() {
  const destaques = destinos.slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80"
          alt=""
          className={styles.heroBg}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Portal de Viagens</p>
          <h1 className={styles.heroTitle}>
            O mundo espera
            <br />
            <em>por você</em>
          </h1>
          <p className={styles.heroSub}>
            Descubra destinos que transformam viagens em memórias eternas.
            De templos milenares às geleiras do fim do mundo.
          </p>
          <div className={styles.heroActions}>
            <Link href="/destinos" className={styles.heroCta}>
              Explorar destinos
            </Link>
            <Link href="/destinos" className={styles.heroSecondary}>
              Ver todos os {destinos.length} destinos <span className={styles.ArrowIcon}><ArrowIcon/></span>
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className={styles.manifesto}>
        <div className={styles.container}>
          <div className={styles.manifestoGrid}>
            <div className={styles.manifestoLeft}>
              <span className={styles.sectionLabel}>Nossa filosofia</span>
              <h2 className={styles.manifestoTitle}>
                Viajar é o único investimento que enriquece sem diminuir.
              </h2>
            </div>
            <div className={styles.manifestoRight}>
              <p className={styles.manifestoText}>
                No Horizonte Viagens, curadorizamos destinos com uma única
                obsessão: encontrar os lugares que mudam a forma como você vê
                o mundo. Não listas genéricas - experiências reais, contexto
                cultural profundo e a honestidade de quem já esteve lá.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>{destinos.length}</span>
                  <span className={styles.statLabel}>Destinos</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5</span>
                  <span className={styles.statLabel}>Continentes</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>Experiências</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINOS EM DESTAQUE */}
      <section className={styles.featured}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Seleção editorial</span>
            <h2 className={styles.sectionTitle}>Destinos em destaque</h2>
          </div>
          <div className={styles.featuredGrid}>
            {destaques.map((destino, i) => (
              <Link
                key={destino.slug}
                href={"/destinos/" + destino.slug}
                className={styles.featuredCard + (i === 0 ? " " + styles.featuredCardLarge : "")}
              >
                <img
                  src={destino.imagem}
                  alt={destino.nome}
                  className={styles.featuredImage}
                />
                <div className={styles.featuredOverlay} />
                <div
                  className={styles.featuredAccent}
                  style={{ background: destino.cor }}
                />
                <div className={styles.featuredContent}>
                  <span className={styles.featuredPais}>{destino.pais}</span>
                  <h3 className={styles.featuredNome}>{destino.nome}</h3>
                  {i === 0 && (
                    <p className={styles.featuredDesc}>{destino.descricao}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link href="/destinos" className={styles.verTodos}>
              Ver todos os destinos
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 8H15M9 2L15 8L9 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaDecor} />
            <p className={styles.ctaEyebrow}>Pronto para partir?</p>
            <h2 className={styles.ctaTitle}>Sua próxima aventura começa aqui.</h2>
            <Link href="/destinos" className={styles.ctaButton}>
              Explorar todos os destinos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
