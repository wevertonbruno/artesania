import React, { useState } from "react";
import * as Styled from "./styled";
import { useOutsideClick } from "../../hooks";
import { MenuProps } from "dotmenu";

function DotMenu({ options, position }: MenuProps) {
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
