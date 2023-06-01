import Image from "next/image";
import { HiCheckBadge } from "react-icons/hi2";
import styles from "./styles.module.scss"

interface ProfileProps {
    name: string;
    image:string;
    isVerified: boolean;
}
export function Profile({name, image, isVerified}: ProfileProps) {

    return(
        <div className={styles.profile}>
            <Image src={image} width={50} height={50} alt={name} />
            <div className={styles.profileInfo}>
                {isVerified && (<span><HiCheckBadge size={15} />Identity verified</span>)}
                <h2>{name}</h2>
            </div>
        </div>
    )
}