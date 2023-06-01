
import { CgKeyboard } from "react-icons/cg";
import { SecondButton } from "../Buttons/SecondButton";
import { MultipleSelect } from "../Select/select";
import styles from "./styles.module.scss";
import { Day } from "../Calendar/Day";

export function DayFrorm() {
  return (
    <>
      <div className={styles.calendar}>
        <Day type="Check-In" />
        <Day type="Check-Ou" />
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
