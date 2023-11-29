import { useRef, useState } from "react";
import * as Styled from "./styled";
import useOutsideClick from "../../hooks/use-outside-click";
import { MenuProps } from "dotmenu";
import { IconMap } from "../myicons";

function DotMenu({ options, riskOptions, position, containerRef }: MenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [positionClass, setPositionClass] = useState<
    "dropdown-top" | "dropdown-bottom"
  >("dropdown-top");

  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick<HTMLDivElement>(menuRef, () => {
    setOpen(false);
  });

  const handleClick = () => {
    if (containerRef) {
      const dropdown = menuRef.current?.querySelector<HTMLDivElement>(
        ".dropdown"
      );
      const toggle = menuRef.current?.querySelector<HTMLDivElement>(
        ".menu-toogle"
      );
      const containerHeight = containerRef.current?.offsetHeight;
      const dropdownHeight = dropdown?.offsetHeight;
      const toggleOffset = toggle?.getBoundingClientRect().top;
      const containerOffset = containerRef.current?.getBoundingClientRect().top;
      const toggleOffsetFromContainer = toggleOffset! - containerOffset!;

      if (containerHeight && dropdownHeight && toggleOffsetFromContainer) {
        if (toggleOffsetFromContainer + dropdownHeight > containerHeight) {
          setPositionClass("dropdown-bottom");
        } else {
          setPositionClass("dropdown-top");
        }
      }
    }
    setOpen(!open);
  };

  return (
    <Styled.MenuWrapper ref={menuRef} $position={position} className="menu">
      <div>
        <Styled.MenuIcon onClick={handleClick} className="menu-toogle" />
        <Styled.Menu
          className={`dropdown ${positionClass} ${open ? "open" : ""}`}
        >
          <ul>
            {options.map((item) => (
              <li key={item.name} onClick={item.onClick}>
                {IconMap.get(item.icon)}
                {item.name}
              </li>
            ))}
            {riskOptions && <hr className="risk-separator"></hr>}
            {riskOptions &&
              riskOptions.map((item) => (
                <li className="risk" key={item.name} onClick={item.onClick}>
                  {IconMap.get(item.icon)}
                  {item.name}
                </li>
              ))}
          </ul>
        </Styled.Menu>
      </div>
    </Styled.MenuWrapper>
  );
}

export default DotMenu;
