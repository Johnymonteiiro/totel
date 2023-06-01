"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "../../assets/logo.svg";
import { links } from "./links";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { HeaderProfile } from "./headerProfile";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import styles from "./styles.module.scss";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
    //Is missing refatoration here :)
    
  return (
    <header className={styles.header}>
      <nav className={isOpen ? `${styles.activeNavbar}` : `${styles.navBar}`}>
        <div className={styles.navLinks}>
          <div className={styles.logo}>
            <Image src={Logo} alt="logo" />
            <h3>totel</h3>
          </div>

          <div className={styles.links}>
            {links.map((link, index) => (
              <Link key={index} href={link?.path}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <HeaderProfile isOpen={isOpen} />

        <div className={styles.mobileBtn}>
          {isOpen ? (
            <button onClick={() => setIsOpen(false)}>
              <MdClose size={20} />
            </button>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu size={20} />
            </button>
          )}
        </div>

        <div className={styles.backHomeBtn}>
          <PrimaryButton path="/">Back</PrimaryButton>
        </div>
      </nav>
    </header>
  );
}
