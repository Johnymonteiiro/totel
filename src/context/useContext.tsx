'use client';

import { MutableRefObject, ReactNode,createContext, useContext, useRef} from "react";


interface ContextProps {
    handleFullscreen: () => void;
    mapRef: MutableRefObject<any>
}

interface TotelContextProps {
    children:ReactNode;
}

export const totelContext = createContext({} as ContextProps)


export function TotelContextProvider({children}:TotelContextProps) {

   //There are no reason for that contextApi, but.. :)

    const mapRef = useRef<any>();


    const handleFullscreen = () => {
      const mapElement = mapRef.current;
      if (mapElement) {
        if (mapElement.requestFullscreen) {
          mapElement.requestFullscreen();
        } else if (mapElement.mozRequestFullScreen) {
          mapElement.mozRequestFullScreen();
        } else if (mapElement.webkitRequestFullscreen) {
          mapElement.webkitRequestFullscreen();
        } else if (mapElement.msRequestFullscreen) {
          mapElement.msRequestFullscreen();
        }
      }
    };

    return(
        <totelContext.Provider 
        value={{
            handleFullscreen,
            mapRef,
        }}>
          {children}
        </totelContext.Provider>
    )
}




export function useTotel() {
    const context = useContext(totelContext);

    return context;
}