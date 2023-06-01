
import { CgKeyboard } from "react-icons/cg";
import { SecondButton } from "../Buttons/SecondButton";
import { MultipleSelect } from "../Select/select";
import styles from "./styles.module.scss";
import { Hour } from "../Calendar/Hour";

export function HourFrorm() {
  return (
    <>
      <div className={styles.calendar}>
        <Hour type="Check-In" />
        <Hour type="Check-Ou" />
      </div>

      <div className={styles.actionBtn}>
        <button>
          <CgKeyboard />
        </button>
        <button>Clear dates</button>
      </div>

      <div className={styles.selectArea}>
        <MultipleSelect />
      </div>

      <div className={styles.proposalBtn}>
        <SecondButton name="Send Proposal" onclick={() => alert("")} />
        <p>You won’t be charged yet</p>
      </div>
    </>
  );
}
