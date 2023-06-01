import Image from "next/image";
import { amenities } from "./amenitie";
import styles from "./styles.module.scss";

export function Amenities() {
  return (
    <>
      <strong>Offered Amenities</strong>

      <div className={styles.amenitiesLists}>
        {amenities.map((amenity, index) => (
          <li key={index}>
            <Image
              src={amenity.icon}
              width={26}
              height={26}
              alt={amenity.name}
            />
            <span>{amenity.name}</span>
          </li>
        ))}
      </div>
    </>
  );
}
