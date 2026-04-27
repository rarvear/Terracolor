import { Mail, Phone, MapPin } from "lucide-react";
import styles from "@/styles/Footer.module.css";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

const contacts = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:terracolor@outlook.cl",
    text: "terracolor@outlook.cl",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://web.facebook.com/terracolorpinturasypastastexturadas",
    text: "@terracolor",
    external: true,
  },
  {
    icon: Phone,
    label: "Teléfono",
    href: "tel:+56949417462",
    text: "+569 4941 7462",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.gradient} />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.heading}>Contáctanos</h2>
            <p className={styles.tagline}>La vida a todo color</p>
          </div>
          <div className={styles.grid}>
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className={styles.contact}
                  aria-label={c.label}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className={styles.iconCircle}>
                    <Icon size={18} />
                  </span>
                  <span>{c.text}</span>
                </a>
              );
            })}
            <div className={styles.contact}>
              <span className={styles.iconCircle}>
                <MapPin size={18} />
              </span>
              <span>La Florida, Santiago de Chile</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2026 Pinturas Terracolor. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}