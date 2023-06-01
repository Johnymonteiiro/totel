
import { FaStar } from "react-icons/fa";
import styles from "./styles.module.scss"
import Image from "next/image";


type TestimonialType ={
    name: string;
    image: string;
    depoiment: string;
    ocupation: string;
    rating: {
        name: string;
    }[]; 
}


interface SlideItemsProps {
  testimonial: TestimonialType;
}
export function SlideItem({testimonial}:SlideItemsProps) {

    return(
        <div className={styles.slideItem}>
           {testimonial.rating.map((rating,index) => (
            <span className={styles.rating} key={index}><FaStar size={20}/></span>
           ))}

           <p>{testimonial.depoiment}</p>

           <div className={styles.testimonialProfile}>
             <Image width={40} height={40} src={testimonial.image} alt={testimonial.name} />
             <div className={styles.profileInfo}>
                <p>{testimonial.name}</p>
                <span>{testimonial.ocupation}</span>
             </div>
           </div>
        </div>
    )
}