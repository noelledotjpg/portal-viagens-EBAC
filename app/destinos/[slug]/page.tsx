import { notFound } from "next/navigation";
import Link from "next/link";
import Layout from "@/components/Layout";
import { destinos, getDestino } from "@/data/destinos";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return destinos.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destino = getDestino(slug);
  if (!destino) return {};
  return {
    title: `${destino.nome}, ${destino.pais} - Horizonte Viagens`,
    description: destino.descricao,
  };
}

export default async function DestinoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destino = getDestino(slug);
  if (!destino) notFound();

  const outros = destinos.filter((d) => d.slug !== destino.slug).slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <div className={styles.hero}>
        <img src={destino.imagem} alt={destino.nome} className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div
          className={styles.heroColorLine}
          style={{ background: destino.cor }}
        />
        <div className={styles.heroContent}>
          <Link href="/destinos" className={styles.backLink}>
            ← Todos os destinos
          </Link>
          <span className={styles.continente}>{destino.continente}</span>
          <h1 className={styles.titulo}>{destino.nome}</h1>
          <p className={styles.pais}>{destino.pais}</p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* LEFT: texto */}
            <div className={styles.textCol}>
              <p className={styles.descricaoCurta}>{destino.descricao}</p>
              <p className={styles.descricaoLonga}>{destino.descricaoLonga}</p>

              <div className={styles.destaques}>
                <h2 className={styles.sectionTitle}>O que não perder</h2>
                <ul className={styles.destaquesList}>
                  {destino.destaques.map((d) => (
                    <li key={d} className={styles.destaquesItem}>
                      <span
                        className={styles.destaquesMarker}
                        style={{ background: destino.cor }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT: info card */}
            <aside className={styles.infoCard}>
              <div
                className={styles.infoCardAccent}
                style={{ background: destino.cor }}
              />
              <h3 className={styles.infoTitle}>Informações práticas</h3>
              <dl className={styles.infoList}>
                <div className={styles.infoRow}>
                  <dt className={styles.infoLabel}>País</dt>
                  <dd className={styles.infoValue}>{destino.pais}</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt className={styles.infoLabel}>Continente</dt>
                  <dd className={styles.infoValue}>{destino.continente}</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt className={styles.infoLabel}>Melhor época</dt>
                  <dd className={styles.infoValue}>{destino.melhorEpoca}</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt className={styles.infoLabel}>Clima</dt>
                  <dd className={styles.infoValue}>{destino.clima}</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt className={styles.infoLabel}>Moeda</dt>
                  <dd className={styles.infoValue}>{destino.moeda}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </div>

      {/* OUTROS DESTINOS */}
      <section className={styles.outros}>
        <div className={styles.container}>
          <div className={styles.outrosHeader}>
            <span className={styles.outrosLabel}>Continue explorando</span>
            <h2 className={styles.outrosTitle}>Outros destinos</h2>
          </div>
          <div className={styles.outrosGrid}>
            {outros.map((d) => (
              <Link key={d.slug} href={"/destinos/" + d.slug} className={styles.outrosCard}>
                <img src={d.imagem} alt={d.nome} className={styles.outrosImage} />
                <div className={styles.outrosOverlay} />
                <div className={styles.outrosAccent} style={{ background: d.cor }} />
                <div className={styles.outrosContent}>
                  <span className={styles.outrosPais}>{d.pais}</span>
                  <h3 className={styles.outrosNome}>{d.nome}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
