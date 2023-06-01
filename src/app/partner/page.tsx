
import { Galeries } from "@/components/Galeries/Galeries";
import { HotelInfo } from "../components/hotelInfo";
import { HomeHero } from "../components/home";
import { MapContent } from "../components/map";
import { Testimonials } from "../components/testimonials";
import { Hotels } from "../components/hotel";
import styles from "../../styles/main.module.scss";

export default function Home() {
  return (
    <main className={styles.wrapper}>
        <div className={`${styles.filters} ${styles.container}`}>
          <button>Love Hotel</button>
          <button>Hourly Basis Available</button>
        </div>

        <section className={`${styles.homeContent} ${styles.container}`} >
          <HomeHero />
        </section>

        <section className={ `${styles.ImageGaleries} ${styles.container}`}>
          <Galeries />
        </section>

        <section className={`${styles.hotelInfo} ${styles.container}`}>
           <HotelInfo />
        </section>

        <section className={`${styles.mapContainer} ${styles.container}`}>
          <MapContent />
        </section>

        <section className={`${styles.testimonialsContainer}`}>
          <Testimonials />
        </section>

        <section className={styles.hotelsContainer}>
          <Hotels />
        </section>
    </main>
  )
}
