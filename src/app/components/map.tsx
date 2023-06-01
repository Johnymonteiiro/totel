
import dynamic from "next/dynamic";
export const MapLayer = dynamic(() => import('@/components/map/map'), { ssr: false })

import styles from "../../styles/main.module.scss";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

export function MapContent() {

    return(
        <div className={styles.mapContent}>
          <h2>Where you’ll be</h2>
          <MapLayer /> 

          <p>
           Very dynamic and appreciated district by the people of Bordeaux thanks
           to rue St James and place Fernand Lafargue. Home to many historical 
           monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte
           Cailhau, and cultural sites such as the Aquitaine Museum.
          </p>

          <div className={styles.mapBtn}>
            <PrimaryButton path="/">Show more</PrimaryButton>
          </div>
        </div>
    )
}