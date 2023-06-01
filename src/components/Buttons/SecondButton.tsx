'use client';
import styles from "./styles.module.scss"

interface PrimaryButtonProps {
    name:string;
    onclick: () => void;
}

export function SecondButton ({name,onclick}:PrimaryButtonProps) {
    return(
       <button className={styles.secondButton} onClick={onclick}>
          {name}
       </button>
    )
}