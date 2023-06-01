import { useMap } from "react-leaflet";
import styles from "./styles.module.scss";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { BiFullscreen } from "react-icons/bi";
import { useTotel } from "@/context/useContext";

export function ZoomButtons() {
  const { handleFullscreen } = useTotel();
  const map = useMap();

  const handleZoomIn = () => {
    map.setZoom(map.getZoom() + 1);
  };

  const handleZoomOut = () => {
    map.setZoom(map.getZoom() - 1);
  };

  return (
    <div className={styles.mapCotroller}>
      <div className={styles.zoomBtns}>
        <button onClick={handleZoomIn}>
          <FiZoomIn size={20} />
        </button>
        <button onClick={handleZoomOut}>
          <FiZoomOut size={20} />
        </button>
      </div>

      <button className={styles.fullScreamBtn} onClick={handleFullscreen}>
        <BiFullscreen />
      </button>
    </div>
  );
}
