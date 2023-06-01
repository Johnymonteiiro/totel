import Image from "next/image";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import Avatar from "../../assets/Avatar.svg";
import styles from "./styles.module.scss";


interface HeaderProfile {
    isOpen:boolean;
}
export function HeaderProfile ({isOpen}:HeaderProfile){

    return (
        <div className={styles.profile}>
        <PrimaryButton path="/">Manage Listings</PrimaryButton>

        <div className={styles.profileImage}>
          <Image width={48} height={48} src={Avatar} alt="profile" />
        </div>
      </div>
    )
}