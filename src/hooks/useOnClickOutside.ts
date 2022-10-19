import {RefObject, useEffect} from "react";

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  onCallback?: () => void,
) {
  useEffect(() => {

    function handleClickOutside(event: any) {
      if(ref.current && !ref.current.contains(event.target)) {
        onCallback && onCallback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>  document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
}
