import { format } from 'date-fns'
import { FaRegStar } from "react-icons/fa";
import styles from "./styles.module.scss"
import Image from "next/image";


type HotelsType ={
  name: string;
  image: string;
  data: Date;
  description: string;
  rating: number;
  price: number;
}


interface SlideItemsProps {
  hotel: HotelsType;
}
export function SlideItem({hotel}:SlideItemsProps) {

  const data = format(hotel.data, 'dd MMM yyyy')

    return(
        <div className={styles.slideItem}>
          <Image priority width={200} height={200} src={hotel.image} alt={hotel.name}/>

          <div className={styles.hotelsInfo}>
            <strong>{hotel.name}</strong>
            <p>{data} - {data}</p>
            <p>{hotel.description}</p>

            <span>${hotel.price} / Day</span>
            <span className={styles.rate}><FaRegStar/> {hotel.rating}</span>
          </div>
        </div>
    )
}