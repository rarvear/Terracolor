import Image from "next/image";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section id="nosotros" className={styles.about} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.textCol}>
            <p className={styles.eyebrow}>Sobre nosotros</p>
            <h2 id="about-heading" className={styles.heading}>Más que pintura,<br />es personalidad</h2>
            <div className={styles.divider} />
            <p className={styles.text}>
              Somos una empresa chilena, nuestro objetivo es marcar la diferencia
              entregando productos de alta calidad, porque sabemos que una pintura
              es más que una decoración, es la personalidad de tus espacios.
            </p>
            <p className={styles.text}>
              Nuestro compromiso es entregar una asesoría completa a nuestros
              clientes, dando flexibilidad de pago y puntualidad.
            </p>
          </div>
          <div className={styles.imageCol}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/door.png"
                alt="Puerta pintada con productos Terracolor"
                width={395}
                height={134}
                className={styles.featuredImage}
              />
            </div>
            <Image
              src="/images/TC.png"
              alt="Logo Terracolor"
              width={277}
              height={268}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}