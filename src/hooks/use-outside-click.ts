import { useEffect, RefObject } from "react";

function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: MouseEvent) => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current?.contains(event.target as any)) {
        return;
      }

      callback(event);
    }
    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideClick;
