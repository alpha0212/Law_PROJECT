import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;

  width: 100%;
  top: 0;
  left: 0;
  right: 0;

  z-index: 99;
  padding-top: 2.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pretendard;
  background-color: #fff;
`;

export const Logo = styled(Link)`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 2rem;
  padding-bottom: 2.5rem;
  transform: translate(-57%, 0);
  padding-left: 32.5%;
  text-decoration: none;
`;

export const LinkContainer = styled.div`
  padding-bottom: 2.7rem;
  padding-right: 50vw;
`;

export const NavbarList = styled.div<{
  hidden: boolean;
}>`
  display: ${(props) => (props.hidden ? "block" : "none")};
  font-family: Pretendard;
  font-weight: 300;
`;

export const NavbarSelect = styled(Link)<{
  underline: String;
}>`
  text-decoration: none;
  color: ${(props) => (props.underline === "true" ? "#2827A6" : "black")};
  margin-left: 4rem;
  margin-right: 4rem;
  font-size: 1.4rem;
  font-weight: 500;
  transition: all 0.3s;
  padding-bottom: 2.6rem;
  border-bottom: ${(props) =>
    props.underline === "true" ? "0.5rem solid rgba(49, 70, 237)" : "none"};
  &:hover {
    color: rgba(156, 158, 225);
    transition: all 0.3s;
  }
`;
