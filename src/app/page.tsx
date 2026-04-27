import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main id="main-content" className={styles.main}>
        <section className={styles.gallery} aria-label="Galería y destacados">
          <div className={styles.carouselWrap}>
            <Carousel />
          </div>
          <div className={styles.sidebarWrap}>
            <Sidebar />
          </div>
        </section>
        <About />
        <Products />
      </main>
      <Footer />
    </>
  );
}