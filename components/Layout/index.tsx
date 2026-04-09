"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}
{/* @ts-ignore */}
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);
{/* @ts-ignore */}
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
  </svg>
);
{/* @ts-ignore */}
const LogoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M3 12h18" />
    <path d="M12 3v18" />
    <path d="M17 7 7 17" />
    <path d="m7 7 10 10" />
  </svg>
);

export default function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>
              <LogoIcon />
            </span>
            <span className={styles.logoText}>
              <span className={styles.logoMain}>HORIZONTE</span>
              <span className={styles.logoSub}>VIAGENS</span>
            </span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>
              Início
            </Link>
            <Link href="/destinos" className={styles.navLink}>
              Destinos
            </Link>
            <Link href="/destinos" className={styles.navCta}>
              Explorar
            </Link>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Alternar tema"
              title={
                theme === "dark"
                  ? "Mudar para tema claro"
                  : "Mudar para tema escuro"
              }
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>
              <span className={styles.logoIconSVG}>
                <LogoIcon />
              </span>
              HORIZONTE
            </span>
            <p className={styles.footerTagline}>
              Descubra o mundo, destino a destino.
            </p>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/" className={styles.footerLink}>
              Início
            </Link>
            <Link href="/destinos" className={styles.footerLink}>
              Destinos
            </Link>
          </div>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} Horizonte Viagens
          </p>
        </div>
      </footer>
    </div>
  );
}
