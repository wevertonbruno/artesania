import { useEffect, RefObject } from "react";

type RefProp = HTMLElement | null;

interface Props {
  callback: (event: MouseEvent) => void;
  refs: RefProp[];
}

function useOutsideClick(
  callback: (event: MouseEvent) => void,
  ...refs: RefProp[]
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      for (const ref of refs) {
        if (ref?.contains(event.target as any)) {
          return;
        }
      }
      callback(event);
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
}

export default useOutsideClick;
