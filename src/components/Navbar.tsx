"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      aria-label="Navegación principal"
    >
      <div className={`${styles.inner} container`}>
        <a href="#" className={styles.brand} aria-label="Terracolor — Inicio">
          <Image
            src="/images/Logo.jpeg"
            alt="Logo Terracolor"
            width={44}
            height={34}
            className={styles.logo}
          />
          <span className={styles.brandName}>Terracolor</span>
        </a>

        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          id="nav-menu"
          className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        >
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+56949417462"
            className={styles.phoneBtn}
            aria-label="Llamar al +569 4941 7462"
          >
            <Phone size={16} />
            <span>Llamar ahora</span>
          </a>
        </div>
      </div>
    </nav>
  );
}