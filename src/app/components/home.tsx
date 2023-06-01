import { PrimaryButton } from "@/components/Buttons/PrimaryButton";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import styles from "../../styles/main.module.scss";

export function HomeHero() {
  return (
    <div className={styles.homeText}>
      <div className={styles.homeTitle}>
        <h1>Cerulean Tower Tokyu Hotel</h1>
        <p>26-1 Sakuragaokacho, Shibuya City, Tokyo 150-8512, Japan</p>
      </div>

      <div className={styles.actionsBtn}>
        <PrimaryButton path="/">
          <AiOutlineLike size={20} />
        </PrimaryButton>
        <PrimaryButton path="/">
          <RiShareForwardLine size={20} />
        </PrimaryButton>
      </div>
    </div>
  );
}
