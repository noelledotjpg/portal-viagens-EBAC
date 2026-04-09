import Layout from "@/components/Layout";
import CardDestino from "@/components/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

export const metadata = {
  title: "Destinos - Horizonte Viagens",
  description: "Explore nossa seleção dos melhores destinos turísticos do mundo.",
};

export default function DestinosPage() {
  return (
    <Layout>
      {/* PAGE HEADER */}
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Curadoria editorial</span>
          <h1 className={styles.pageTitle}>Destinos</h1>
          <p className={styles.pageDesc}>
            {destinos.length} destinos selecionados em {" "}
            <span className={styles.highlight}>5 continentes</span>.
            Cada lugar com contexto, detalhes e a honestidade de quem foi.
          </p>
        </div>
      </div>

      {/* GRID */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {destinos.map((destino, i) => (
              <CardDestino key={destino.slug} destino={destino} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
