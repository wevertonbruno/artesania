import React, { useContext } from "react";
import {
  SidebarWrapper,
  LogoWrapper,
  ToggleButton,
  Menubar,
  MenuItem,
  HomeIcon,
  ProductIcon,
  SearchBar,
  SearchIcon,
  MenuFooter,
  LogoutIcon,
  ModeWrapper,
  MoonIcon,
  SunIcon,
  ConfigIcon,
  DashIcon,
} from "./styled";
import SwitchButton from "../switch";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../context/SidebarContext";

interface IMenuItem {
  icon: React.ReactElement;
  text: string;
  link: string;
}

const menuItems = [
  {
    icon: <HomeIcon />,
    text: "Home",
    link: "/",
  },
  {
    icon: <ProductIcon />,
    text: "Projetos",
    link: "/projetos",
  },
  {
    icon: <ProductIcon />,
    text: "Produtos",
    link: "/produtos",
  },
  {
    icon: <DashIcon />,
    text: "Componentes",
    link: "/componentes",
  },
] as IMenuItem[];

function Sidebar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { isOpen, toggleSidebar } = useContext(SidebarContext);

  return (
    <SidebarWrapper className={isOpen ? "" : "sidebar-closed"}>
      <LogoWrapper>
        <div>
          <span className="image">
            <img src="/logo.png" alt="Logo" />
          </span>
          <div className="text">
            <span className="logo">Artesania</span>
            <span className="description">presentes afetivos</span>
          </div>
        </div>
        <ToggleButton
          className="toggle-sidebar"
          onClick={() => toggleSidebar()}
        />
      </LogoWrapper>
      <Menubar>
        <div>
          <SearchBar>
            <SearchIcon />
            <input type="text" placeholder="Procurar..." />
          </SearchBar>
          <ul>
            {menuItems.map((item) => (
              <MenuItem key={item.text}>
                <Link to={item.link}>
                  {item.icon}
                  <span className="text">{item.text}</span>
                </Link>
              </MenuItem>
            ))}
          </ul>
        </div>
        <MenuFooter>
          <MenuItem>
            <Link to="/config">
              <ConfigIcon />
              <span className="text">Configuraçao</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <a>
              <LogoutIcon />
              <span className="text">Sair</span>
            </a>
          </MenuItem>
          <ModeWrapper>
            <div className="moon-sun">
              <SunIcon opacity={darkMode ? "1" : "0"} />
              <MoonIcon opacity={darkMode ? "0" : "1"} />
            </div>
            <span className="text">{darkMode ? "Light" : "Dark"} Mode</span>
            <SwitchButton active={darkMode} onClick={() => toggleDarkMode()} />
          </ModeWrapper>
        </MenuFooter>
      </Menubar>
    </SidebarWrapper>
  );
}

export default Sidebar;
