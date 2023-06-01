
import Link from "next/link"
import styles from "./styles.module.scss"

interface FooterSectionProps {
    name:string;
    footerLinks: {
        name: string;
        path: string;
    }[]
}

export function FooterSection ({name,footerLinks}:FooterSectionProps) {

    return(
       <div className={styles.footerSection}>
        <h3>{name}</h3>
        {footerLinks.map((item, index) => (
            <Link className={styles.footerLinks} key={index} href={item.path}>{item.name}</Link>
        ))}
       </div>
    )
}