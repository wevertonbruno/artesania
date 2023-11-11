import React, { useRef, useState } from "react";
import * as Styled from "./styled";
import { useOutsideClick } from "../../hooks";
import { MenuProps } from "dotmenu";
import { IconMap } from "../myicons";

function DotMenu({ options, riskOptions, position, containerRef }: MenuProps) {
  const [top, setTop] = useState<string | number>("auto");
  const [bottom, setBottom] = useState<string | number>("auto");
  const [open, setOpen] = useState<boolean>(false);

  const menuRef = useOutsideClick(() => {
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
      console.log(
        containerHeight,
        dropdownHeight,
        toggleOffset,
        toggleOffsetFromContainer
      );

      if (containerHeight && dropdownHeight && toggleOffsetFromContainer) {
        if (toggleOffsetFromContainer + dropdownHeight > containerHeight) {
          setBottom(0);
          setTop("auto");
        } else {
          setBottom("auto");
          setTop(0);
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
          className={`dropdown ${open ? "open" : ""}`}
          style={{ top, bottom }}
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
