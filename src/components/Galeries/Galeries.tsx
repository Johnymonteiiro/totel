import Link from "next/link";
import Image from "next/image";
import { images } from "./images";
import styles from "./styles.module.scss";


export function Galeries() {

    return(
        <div className={styles.galeryCard}>
          {images.map((image,index) => (
            <div className={styles.card} key={index}>
              <Image src={image.path} alt={image.name} />
            </div>
          ))}

          <div className={styles.morePhotosBtn}>
           <Link className={styles.showMoreButton} href="/">
             Show more photos
           </Link>
          </div>
        </div>
    )
}