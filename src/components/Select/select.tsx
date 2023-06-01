'use client'

import { useState } from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { listItems } from "./listItems";
import { SelectedItems } from "./selectedItems";
import { ModalItems } from "./modalItems";
import useClickOutSide from "@/hooks/clickOutSide";
import styles from "./styles.module.scss"

export type ItemsTypes = {
  name: string;
  qty:number;
}

export function MultipleSelect() {
  
  const { isOpen, setIsOpen, modalRef } = useClickOutSide();
  const [items,setItems] = useState<ItemsTypes[]>([])


    return(
     <div className={styles.select_container} ref={modalRef}>
      <p className={styles.selectTitle}>Guest</p>
       
      <div className={styles.select_content}>
       <button className={styles.openBtn} onClick={() => setIsOpen(!isOpen)}>
         <SelectedItems items={items} />

         {isOpen ? <IoIosArrowUp size={22}/> : <IoIosArrowDown size={22} />}
       </button>

       <div className={isOpen ? `${styles.activeModal}` : `${styles.selectModal}`}>
            {listItems.map((item, index) => (
              <ModalItems 
                key={index} 
                items={items} 
                item={item} 
                setItems={setItems}
              />
            ))}
       </div>
      </div>
     </div>
    )
}