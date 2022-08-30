import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;

  z-index: 80;
  padding-top: 2.5vh;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pretendard;
  border-bottom: 0.1rem solid #c6c6c6;
  background-color: #fff;
`;

export const Logo = styled(Link)`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 2.5vh;
  padding-bottom: 2.5vh;
  transform: translate(-57%, 0);
  padding-left: 32.5%;
  text-decoration: none;
  color: #2827a6;
`;

export const LinkContainer = styled.div`
  padding-bottom: 2.7vh;
  padding-right: 50vw;
`;

export const NavbarList = styled.div`
  font-family: Pretendard;
  font-weight: 300;
`;

export const NavbarSelect = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 4vh;
  margin-right: 4vh;
  font-size: 1.4rem;
  font-weight: 500;
  transition: all 0.3s;
  padding-bottom: 2.6vh;
  &:hover {
    color: rgba(156, 158, 225);
    transition: all 0.3s;
  }
`;
