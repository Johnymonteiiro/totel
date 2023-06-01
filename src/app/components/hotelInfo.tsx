import Link from "next/link";
import { TbShieldHalfFilled, TbFlag3 } from "react-icons/tb";
import { Amenities } from "@/components/Amenities/Amenities";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { Profile } from "@/components/Profiles/Profile";
import { SideBar } from "@/components/SideBar/Sidebar";
import Avatar from "../../assets/Avatar.svg";

import styles from "../../styles/main.module.scss";

export function HotelInfo() {

  //Is missing refatoration here :)
  
  return (
    <>
      <div className={styles.hotelDetails}>
        <div className={styles.profileArea}>
          <Profile image={Avatar} isVerified={true} name="Hosted by Ghazal" />
          
          <div className={styles.profileBtn}>
            <PrimaryButton path="/">View Profile</PrimaryButton>
          </div>
        </div>

        <p className={styles.protectedPayment}>
          <TbShieldHalfFilled size={25} />
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </p>

        <div className={styles.hotelDescription}>
          <strong>Description</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem
          </p>

          <div className={styles.hotelDescriptionBtn}>
            <PrimaryButton path="/">Show more</PrimaryButton>
          </div>
        </div>

        <div className={styles.amenities}>
          <Amenities />

          <div className={styles.amenitiesBtn}>
            <PrimaryButton path="/">Show more amenities</PrimaryButton>
          </div>
        </div>
      </div>

      <div className={styles.hotelsSidebar}>
        <SideBar />
        <Link href="/">
          <TbFlag3 />
          Report this listing
        </Link>
      </div>
    </>
  );
}
