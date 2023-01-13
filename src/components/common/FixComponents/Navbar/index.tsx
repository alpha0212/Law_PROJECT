import React, { useState, useEffect } from "react";

import * as S from "./styled";
import { useLocation } from "react-router";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const show = location.pathname.split("/")[1];

  const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState("transparent");
  const [underColor, setUnderColor] = useState("false");
  const [titleColor, settitleColor] = useState("#ffffff");

  const [working, setWorking] = useState("false");
  const [working2, setWorking2] = useState("false");
  const [working3, setWorking3] = useState("false");
  const [working4, setWorking4] = useState("false");
  const [hiddenNav, SetHiddenNav] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
    window.scrollY > 10 ? settitleColor("#2827a6") : settitleColor("#ffffff");
    window.scrollY > 10 ? setUnderColor("true") : setUnderColor("false");
    window.scrollY > 10 ? SetHiddenNav(true) : SetHiddenNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (show === "intro") {
      setWorking("true");
    } else if (show === "content") {
      setWorking2("true");
    } else if (show === "solution") {
      setWorking3("true");
    } else if (show === "help") {
      setWorking4("true");
    }
  }, [show]);

  const select = () => {
    setWorking("true");
    setWorking2("false");
    setWorking3("false");
    setWorking4("false");
  };
  const select2 = () => {
    setWorking("false");
    setWorking2("true");
    setWorking3("false");
    setWorking4("false");
  };
  const select3 = () => {
    setWorking("false");
    setWorking2("false");
    setWorking3("true");
    setWorking4("false");
  };
  const select4 = () => {
    setWorking("false");
    setWorking2("false");
    setWorking3("false");
    setWorking4("true");
  };
  useEffect(() => {
    if (show === "content") {
      setWorking("true");
      setWorking2("false");
    }
  }, []);
  return (
    <>
      <S.NavbarContainer
        style={{
          backgroundColor: navColor,
          color: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <S.Logo to="/" style={{ color: titleColor }}>
          LAW
        </S.Logo>
        <S.LinkContainer>
          <S.NavbarList hidden={hiddenNav}>
            <S.NavbarSelect
              onClick={select}
              underline={working.toString()}
              to="/intro"
            >
              INTRODUCTION
            </S.NavbarSelect>
            <S.NavbarSelect
              onClick={select2}
              underline={working2.toString()}
              to="/content"
            >
              CONTENT
            </S.NavbarSelect>
            <S.NavbarSelect
              onClick={select3}
              underline={working3.toString()}
              to="/solution"
            >
              SOLUTION
            </S.NavbarSelect>
            <S.NavbarSelect onClick={select4} underline={working4} to="/help">
              HELP
            </S.NavbarSelect>
          </S.NavbarList>
        </S.LinkContainer>
      </S.NavbarContainer>
    </>
  );
};
