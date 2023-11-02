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
  BiSolidDashboard,
} from "react-icons/bi";

export const SidebarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 15.625rem;
  padding: 0.625rem 0.875rem;
  background: var(--sidebar-color);
  z-index: 100;
  transition: var(--tran-05);
  box-shadow: var(--box-shadow-default);

  .text {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-color);
    transition: var(--tran-03);
    white-space: nowrap;
    opacity: 1;
    transform: scaleX(1);
    transform-origin: 0%;
  }

  &.sidebar-closed {
    width: 5.5rem;

    .text {
      opacity: 0;
      transform: scaleX(0);
    }

    .toggle-sidebar {
      transform: translateY(-50%);
    }

    .image img {
      width: 3.75rem;
      transition: var(--tran-03);
    }
  }
`;

export const LogoWrapper = styled.header`
  position: relative;
  .image {
    min-width: 3.75rem;
    display: flex;
    align-items: center;

    > img {
      width: 2.5rem;
      border-radius: 0.375rem;
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
      margin-top: -0.125rem;
    }
  }

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Menubar = styled.nav`
  height: calc(100% - 3.125rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 0.3125rem;
`;

export const MenuItem = styled.li`
  height: 3.125rem;
  margin-top: 0.625rem;
  list-style: none;
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  color: var(--text-color);

  > a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 0.375rem;
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
  border-radius: 0.375rem;
  transition: var(--tran-03);

  input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 0.375rem;
    background: var(--primary-color-light);
    transition: var(--tran-03);
    color: var(--text-color);
  }
`;

export const MenuFooter = styled.div``;

export const ModeWrapper = styled(MenuItem)`
  position: relative;
  background: var(--primary-color-light);

  .moon-sun {
    height: 3.125rem;
    width: 3.75rem;
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
  right: -1.875rem;
  transform: translateY(-50%);
  height: 1.5625rem;
  width: 1.5625rem;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--sidebar-color);
  font-size: 1.375rem;
  transform: translateY(-50%) rotate(180deg);
  transition: var(--tran-03);
`;

// ====== ICONS ======= //
const iconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  min-width: 3.75rem;
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

export const DashIcon = styled(BiSolidDashboard)`
  ${iconStyle}
`;
