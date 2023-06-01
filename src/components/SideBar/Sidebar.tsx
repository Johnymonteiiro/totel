"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { SideBarButton } from "./sideBarButton";
import { PriceDetails } from "./priceDetails";
import { DayFrorm } from "./dayForm";
import { HourFrorm } from "./hourForm copy";

export interface ActiveButtonsProps {
  hour?: boolean;
  day?: boolean;
}

export function SideBar() {
  const [active, setActive] = useState({hour:true} as ActiveButtonsProps);

   //Is missing refatoration here :)
    //Is missing calculate total price per day and hour :)

  function onClickButtonHour() {
    setActive({ hour: true, day: false });
  }
  function onClickButtonDay() {
    setActive({ hour: false, day: true });
  }

  return (
    <div className={styles.price_card_container}>

      <p>{active.hour ? <><span>$1</span> / Hour</> : <><span>$18</span> / Day</>}</p>
      
      <div className={styles.tabsBtnContainer}>
       <div className={styles.tabsBtn}>
        <SideBarButton active={active.hour} onClick={onClickButtonHour} name="Hour" />
        <SideBarButton active={active.day} onClick={onClickButtonDay} name="Day" />
       </div>
      </div>

      {active.hour ? <HourFrorm />  : <DayFrorm />}

       <PriceDetails />
    </div>
  );
}
