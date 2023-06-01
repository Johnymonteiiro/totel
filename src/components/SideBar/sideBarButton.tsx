
import styles from "./styles.module.scss";

interface SideBarButtonsProps {
    onClick:() => void;
    name:string;
    active: boolean | undefined;
}
export function SideBarButton({active,onClick,name}:SideBarButtonsProps) {
  
    return (
        <button
        onClick={onClick}
        className={active? styles.tabsBtn_active : ""}
      >
       {name}
      </button>
    )
}