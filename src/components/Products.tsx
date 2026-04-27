import { Droplets, Home, Layers } from "lucide-react";
import styles from "@/styles/Products.module.css";

const products = [
  {
    icon: Droplets,
    title: "Pinturas para Césped",
    description: "Demarca tu cancha con la pintura de más alta calidad",
    color: "#2D8B46",
  },
  {
    icon: Home,
    title: "Interiores y Exteriores",
    description: "Colores de calidad para cualquier lugar de tu hogar",
    color: "#C65D3E",
  },
  {
    icon: Layers,
    title: "Texturas",
    description: "Somos expertos en texturas",
    color: "#8B4513",
  },
];

export default function Products() {
  return (
    <section id="productos" className={styles.products} aria-labelledby="products-heading">
      <div className="container">
        <p className={styles.eyebrow}>Lo que ofrecemos</p>
        <h2 id="products-heading" className={styles.heading}>Nuestros Productos</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.title} className={styles.card}>
              <div className={styles.iconWrap} style={{ background: `${product.color}15`, color: product.color }}>
                <product.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{product.title}</h3>
              <p className={styles.cardText}>{product.description}</p>
              <div className={styles.cardBar} style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}