import { FaStar } from "react-icons/fa";
import styles from "../../styles/main.module.scss";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { Slide } from "@/components/testimonials/Slide";

export function Testimonials () {

    return (
        <div className={`${styles.testimonialsContent} ${styles.container}`}>
          <p><FaStar size={20}/><span>5.0 &bull;</span>12 Reviews</p>
          
          <Slide />

          <div className={styles.testimonialsBtn}>
            <PrimaryButton path="/">Show more amenities</PrimaryButton>
          </div>
        </div>
    )
}