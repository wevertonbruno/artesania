import React, { useState } from "react";
import * as Styled from "./styled";
import { useOutsideClick } from "../../hooks";
import { MenuProps } from "dotmenu";
import { IconMap } from "../myicons";

function DotMenu({ options, riskOptions, position }: MenuProps) {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return (
    <Styled.MenuWrapper ref={ref} $position={position}>
      <div>
        <Styled.MenuIcon onClick={() => setOpen(!open)} />
        <Styled.Menu className={open ? "open" : ""}>
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
