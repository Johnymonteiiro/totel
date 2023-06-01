"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
} from "react-leaflet";

import { ZoomButtons } from "./zoomController";
import { useTotel } from "@/context/useContext";
import styles from "./styles.module.scss";

const icon = L.icon({
  iconUrl: "/images/marker.svg",
  iconSize: [36, 36],
  iconAnchor: [19, 2],
});

export default function MapLayer() {
  const position: [number, number] = [51.505, -0.09];
  const { mapRef } = useTotel();

  return (
    <div className={styles.mapContainer}>
      <div ref={mapRef}>
        <MapContainer
          center={position}
          className={styles.map}
          zoom={15}
          scrollWheelZoom={false}
          touchZoom={true}
          zoomControl={false}
        >
          <TileLayer
            className={styles.tileLayer}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Tooltip
              direction="top"
              offset={[0, -8]}
              opacity={1}
              permanent
              className={styles.toltip}
            >
              Exact location provided after booking
            </Tooltip>
          </Marker>
          <ZoomButtons />
        </MapContainer>
      </div>
    </div>
  );
}
