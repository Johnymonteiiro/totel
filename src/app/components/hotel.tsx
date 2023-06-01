import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import styles from "../../styles/main.module.scss";
import { HotelSlide } from "@/components/hotels/Slide";

export function Hotels () {

    return (
      <div className={`${styles.hotelsContent } ${styles.container}`}>
       <div className={styles.hotelsTexts}>
         <div className={styles.hotelsDescriptions}>
           <h1>Nearby hotels</h1>
           <p>You can find places and stay with hotels and home-stays ranked 
            by travellers. What fun could we have more than having roommate with similar interest.</p>
         </div>

         <div className={styles.amenitiesBtn}>
            <PrimaryButton path="/">Show more</PrimaryButton>
          </div>
       </div>

       <HotelSlide />
      </div>
    )
}