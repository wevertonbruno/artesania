import styled from "styled-components";
import { css } from "styled-components";
import {
  BiChevronRight,
  BiHome,
  BiCoffee,
  BiSearch,
  BiLogOut,
  BiMoon,
  BiSun,
  BiCog,
} from "react-icons/bi";

export const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: var(--sidebar-color);
  z-index: 100;
  transition: var(--tran-05);

  .text {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-color);
    transition: var(--tran-03);
    white-space: nowrap;
    opacity: 1;
  }

  &.sidebar-closed {
    width: 88px;

    .text {
      opacity: 0;
    }

    .toggle-sidebar {
      transform: translateY(-50%);
    }

    .image img {
      width: 60px;
      transition: var(--tran-03);
    }
  }
`;

export const LogoWrapper = styled.header`
  position: relative;
  .image {
    min-width: 60px;
    display: flex;
    align-items: center;

    > img {
      width: 40px;
      border-radius: 6px;
      transition: var(--tran-03);
    }
  }

  .text {
    display: flex;
    flex-direction: column;

    .logo {
      font-weight: 600;
    }

    .description {
      margin-top: -2px;
    }
  }

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Menubar = styled.nav`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 5px;
`;

export const MenuItem = styled.li`
  height: 50px;
  margin-top: 10px;
  list-style: none;
  display: flex;
  align-items: center;
  border-radius: 6px;
  color: var(--text-color);

  > a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 6px;
    transition: var(--tran-04);
    > * {
      color: var(--text-color);
      transition: var(--tran-02);
    }
  }

  > a:hover {
    background-color: var(--primary-color);
    > * {
      color: var(--sidebar-color);
    }
  }
`;

export const SearchBar = styled(MenuItem)`
  background: var(--primary-color-light);
  border-radius: 6px;
  transition: var(--tran-03);

  input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 6px;
    background: var(--primary-color-light);
    transition: var(--tran-03);
    color: var(--text-color);

    &::placeholder {
      color: var(--sidebar-color);
    }
  }
`;

export const MenuFooter = styled.div``;

export const ModeWrapper = styled(MenuItem)`
  position: relative;
  background: var(--primary-color-light);

  .moon-sun {
    height: 50px;
    width: 60px;
    display: flex;
    align-items: center;

    svg {
      position: absolute;
    }
  }
`;

export const ToggleButton = styled(BiChevronRight)`
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  height: 25px;
  width: 25px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--sidebar-color);
  font-size: 22px;
  transform: translateY(-50%) rotate(180deg);
  transition: var(--tran-03);
`;

// ====== ICONS ======= //
const iconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  min-width: 60px;
  color: var(--text-color);
`;
export const HomeIcon = styled(BiHome)`
  ${iconStyle}
`;

export const ProductIcon = styled(BiCoffee)`
  ${iconStyle}
`;

export const SearchIcon = styled(BiSearch)`
  ${iconStyle}
`;

export const LogoutIcon = styled(BiLogOut)`
  ${iconStyle}
`;

export const ConfigIcon = styled(BiCog)`
  ${iconStyle}
`;

export const MoonIcon = styled(BiMoon)`
  ${iconStyle}
  transition: var(--tran-03);
`;

export const SunIcon = styled(BiSun)`
  ${iconStyle}
  transition: var(--tran-03);
`;
