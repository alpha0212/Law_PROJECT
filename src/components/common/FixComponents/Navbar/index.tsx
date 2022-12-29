import React, { useState, useEffect } from "react";

import * as S from "./styled";
import { useLocation } from "react-router";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const show = location.pathname.split("/")[1];

  const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState("transparent");
  const [contentColor, setcontentColor] = useState("transparent");
  const [contentColor2, setcontentColor2] = useState("transparent");
  const [underColor, setunderColor] = useState(false);
  const [titleColor, settitleColor] = useState("#ffffff");

  const [working, setWorking] = useState(false);
  const [working2, setWorking2] = useState(false);
  const [working3, setWorking3] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#ffffff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
    window.scrollY > 10 ? settitleColor("#2827a6") : settitleColor("#ffffff");
    window.scrollY > 10
      ? setcontentColor("black")
      : setcontentColor("transparent");
    window.scrollY > 10
      ? setcontentColor2("black")
      : setcontentColor2("transparent");
    window.scrollY > 10 ? setunderColor(true) : setunderColor(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const select = () => {
    setWorking(true);
    setWorking2(false);
    setWorking3(false);
  };
  const select2 = () => {
    setWorking(false);
    setWorking2(true);
    setWorking3(false);
  };
  const select3 = () => {
    setWorking(false);
    setWorking2(false);
    setWorking3(true);
  };
  useEffect(() => {
    if (show === "content") {
      setWorking(true);
      setWorking2(false);
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
          <S.NavbarList>
            <S.NavbarSelect
              onClick={select}
              UnderLine={working}
              NotShow={underColor}
              to="/intro"
            >
              INTRODUCTION
            </S.NavbarSelect>
            <S.NavbarSelect
              onClick={select2}
              UnderLine={working2}
              NotShow={underColor}
              to="/content"
            >
              CONTENT
            </S.NavbarSelect>
            <S.NavbarSelect
              onClick={select3}
              UnderLine={working3}
              NotShow={underColor}
              to="/solution"
            >
              SOLUTION
            </S.NavbarSelect>
          </S.NavbarList>
        </S.LinkContainer>
      </S.NavbarContainer>
    </>
  );
};
