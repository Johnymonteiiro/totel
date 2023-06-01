import Image from "next/image"
import Link from "next/link"
import { FooterSection } from "./footerSection"
import Apple from "../../../public/apple.svg"
import Logo from "../../assets/logo.svg";
import Android from "../../../public/android.svg"
import { ResourcesLinks, compayLinks, produstsLinks } from "./footerLink"
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

import styles from "./styles.module.scss"

export function Footer() {

    return(
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
            <FooterSection name="Products" footerLinks={produstsLinks}/>
            <FooterSection name="Products" footerLinks={produstsLinks}/>
            <FooterSection name="Resources" footerLinks={ResourcesLinks}/>
            <FooterSection name="Company" footerLinks={compayLinks}/>

            <div className={styles.footerDevices}>
              <h3>Mobile app</h3>
               <Link className={styles.footerLinksDevice} href="/"><Image src={Apple} alt="apple"/></Link>
               <Link className={styles.footerLinksDevice} href="/"><Image src={Android} alt="android"/></Link>
            </div>
            </div>

            <div className={styles.footerButtom}>
                <div className={styles.footerLogo}>
                 <Image src={Logo} alt="logo" />
                  <h3>totel</h3>
                </div>

                <p>© 2023 Totel. All Rights Reserved.</p>

                <div className={styles.socialMedia}>
                  <Link className={styles.footerSocialLink} href="/"><FaFacebook size={24} /></Link>
                  <Link className={styles.footerSocialLink} href="/"><FaGoogle size={24}  /></Link>
                  <Link className={styles.footerSocialLink} href="/"><FaApple size={28} /></Link>
                  <Link className={styles.footerSocialLink} href="/"><FaInstagram size={24}  /></Link>
                </div>
            </div>
          </div>
        </footer>
    )
}