import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  @media screen and (max-width: 500px) {
    width: 30%;
  }
  top: 0;
  left: 0;
  right: 0;

  z-index: 80;
  padding-top: 2.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Pretendard;
  background-color: #fff;
`;

export const NavbarWidth = styled.div`
  width: 80%;
  margin: auto;
`;

export const Logo = styled(Link)`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 2rem;
  padding-bottom: 2.5rem;
  transform: translate(-57%, 0);
  text-decoration: none;
`;

export const LinkContainer = styled.div`
  padding-bottom: 2.7rem;
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
  font-size: 1.4rem;
  font-weight: 500;
  transition: all 0.3s;
  padding-bottom: 2.6rem;
  &:hover {
    color: rgba(156, 158, 225);
    transition: all 0.3s;
  }
`;
