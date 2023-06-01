'use client';

import Link from "next/link";
import { ReactNode } from "react"
import styles from "./styles.module.scss"

interface PrimaryButtonProps {
    children:ReactNode;
    path:string;
}

export function PrimaryButton ({children,path}:PrimaryButtonProps) {
    return(
       <Link className={styles.primaryButton} href={path}>
          {children}
       </Link>
    )
}