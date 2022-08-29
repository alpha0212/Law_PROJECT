import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
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
  font-weight: 500;
  font-size: 2.3rem;
  padding-bottom: 2.5vh;
  transform: translate(-57%, 0);
  padding-left: 32.5%;
  text-decoration: none;
  color: black;
`;

export const LinkContainer = styled.div`
  padding-bottom: 2.5vh;
  padding-right: 50vw;
`;

export const NavbarList = styled.div`
  font-family: Pretendard;
  font-weight: 300;
`;

export const NavbarSelect = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 4rem;
  margin-right: 4rem;
  transition: all 0.3s;
  &:hover {
    color: rgba(156, 158, 225);
    transition: all 0.3s;
  }
`;
