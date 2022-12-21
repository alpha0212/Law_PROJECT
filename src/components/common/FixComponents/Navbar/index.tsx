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
  const [underColor, setunderColor] = useState("transparent");
  const [titleColor, settitleColor] = useState("#ffffff");

  const [working, setWorking] = useState(false);
  const [working2, setWorking2] = useState(true);
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
    window.scrollY > 10
      ? setunderColor("0.5rem solid rgba(49, 70, 237)")
      : setunderColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const select = () => {
    setWorking(false);
    setWorking2(true);
  };
  const select2 = () => {
    setWorking(true);
    setWorking2(false);
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
              style={{
                borderBottom: !working ? underColor : "none",
                color: working ? contentColor : "#2827A6",
              }}
              to="/intro"
            >
              INTRODUCTION
            </S.NavbarSelect>
            <S.NavbarSelect
              onClick={select2}
              style={{
                borderBottom: !working2 ? underColor : "none",
                color: !working2 ? "#2827A6" : contentColor2,
              }}
              to="/content"
            >
              CONTENT
            </S.NavbarSelect>
          </S.NavbarList>
        </S.LinkContainer>
      </S.NavbarContainer>
    </>
  );
};
