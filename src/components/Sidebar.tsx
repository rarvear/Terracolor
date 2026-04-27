import Image from "next/image";
import styles from "@/styles/Sidebar.module.css";

const items = [
  {
    title: "Usamos los mejores insumos",
    image: "/images/pigmentos.jpg",
    alt: "Pigmentos de alta calidad para pinturas",
    accent: true,
  },
  {
    title: "Colores a pedido",
    image: "/images/carta.jpg",
    alt: "Carta de colores disponibles a pedido",
    accent: false,
  },
  {
    title: "Precios convenientes",
    image: "/images/PI2.jpg",
    alt: "Precios accesibles para pinturas de calidad",
    accent: true,
  },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Destacados">
      {items.map((item, i) => (
        <div key={item.title} className={styles.card}>
          <div className={styles.cardImage}>
            <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 25vw" />
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <span className={styles.cardTag}>{item.title}</span>
            </div>
          </div>
        </div>
      ))}
    </aside>
  );
}