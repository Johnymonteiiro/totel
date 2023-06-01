import styles from "./styles.module.scss";

export function PriceDetails() {
  return (
    <>
      <div className={styles.priceDetails}>
        <p>$75 x 7 nights</p>
        <span>$525</span>
      </div>

      <div className={styles.weeklyDiscount}>
        <p>Weekly discount</p>
        <span>-$28</span>
      </div>

      <div className={styles.totalPrice}>
        <p>Total</p>
        <span>$493</span>
      </div>
    </>
  );
}
