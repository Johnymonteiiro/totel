
import { ItemsTypes } from "./select"
import styles from "./styles.module.scss"

interface SelectedItemsProps {
    items: ItemsTypes[]
}

export function SelectedItems ({ items }: SelectedItemsProps) {

    return (
        <p className={styles.displayItems}>
        {items.length > 0 &&(<>{items.map((item:any) => (<span>{item.qty} {item.name}{","}</span>))}</>
        )}

        {items.length <= 0 && (<span>Select options</span>)}
       </p>
    )
}