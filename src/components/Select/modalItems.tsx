import { Dispatch, SetStateAction } from "react";
import { BiPlus,BiMinus } from "react-icons/bi";
import { ItemsTypes } from "./select";
import styles from "./styles.module.scss";

interface ModalItemsProps {
    items:ItemsTypes[];
    item:ItemsTypes;
    setItems: Dispatch<SetStateAction<ItemsTypes[]>>;
}

export function ModalItems({items, setItems,item}:ModalItemsProps) {
  
   //Is missing refatoration here :)

    function addItems(newItem: ItemsTypes) {
        const itemExist = items.find(
          (item) => item.name === newItem.name
        );
  
        if (!itemExist) {
          setItems((prev: any) => [...prev, newItem]);
        } else {
          const updateItem = items.map((item) => {
            if (newItem.name === item.name) {
              return { ...item, qty: item.qty <= 8 ? item.qty + 1 : item.qty };
            }
            return item;
          });
  
          setItems(updateItem);
        }
      }
  
      function removeItems(newItem: any) {
        const itemExist = items.find(
          (item) => item.name === newItem.name
        );
  
        if (!itemExist) {
          setItems((prev) => [...prev, newItem]);
        } else {
          const updateItem = items.map((item) => {
            if (newItem.name === item.name) {
              return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 };
            }
            return item;
          });
  
          setItems(updateItem);
        }
      }

  return (
    <div className={styles.Modal_Item}>
      <p>{item.name}</p>

      <div className={styles.modal_items_btn}>
        <button onClick={() => addItems({ name: item.name, qty: item.qty })}>
          <BiPlus />
        </button>
        <button 
          onClick={() => removeItems({ name: item.name, qy: item.qty })}
        >
          <BiMinus />
        </button>
      </div>
    </div>
  );
}
