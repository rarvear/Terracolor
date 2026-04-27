import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terracolor — Pinturas y Texturas | La vida a todo color",
  description:
    "Pinturas Terracolor: empresa chilena de pinturas de alta calidad para interiores, exteriores, césped y texturas. Asesoría completa, colores a pedido y precios convenientes. La Florida, Santiago de Chile.",
  keywords: [
    "pinturas",
    "terracolor",
    "pinturas chile",
    "texturas",
    "pinturas exteriores",
    "pinturas interiores",
    "pintura césped",
    "colores a pedido",
    "La Florida Santiago",
  ],
  openGraph: {
    title: "Terracolor — Pinturas y Texturas",
    description:
      "La vida a todo color. Pinturas de alta calidad, asesoría completa y colores a pedido.",
    url: "https://terracolor.cl",
    siteName: "Terracolor",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/images/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Pinturas Terracolor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terracolor — Pinturas y Texturas",
    description:
      "La vida a todo color. Pinturas de alta calidad, asesoría completa y colores a pedido.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={comfortaa.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pinturas Terracolor",
              description:
                "Empresa chilena de pinturas de alta calidad para interiores, exteriores, césped y texturas.",
              telephone: "+56949417462",
              email: "terracolor@outlook.cl",
              address: {
                "@type": "PostalAddress",
                addressLocality: "La Florida",
                addressRegion: "Santiago",
                addressCountry: "CL",
              },
              url: "https://terracolor.cl",
              image: "https://terracolor.cl/images/TC.png",
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}