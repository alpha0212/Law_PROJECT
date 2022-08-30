import React, { useState, useEffect } from "react";

import * as S from "./styled";

export const Navbar: React.FC = () => {
  const [working, setWorking] = useState(false);
  const [working2, setWorking2] = useState(true);
  const select = () => {
    setWorking(false);
    setWorking2(true);
  };
  const select2 = () => {
    setWorking(true);
    setWorking2(false);
  };
  return (
    <>
      <S.NavbarContainer>
        <S.Logo to="/">HJ</S.Logo>
        <S.LinkContainer>
          <S.NavbarList>
            <S.NavbarSelect
              onClick={select}
              style={{
                borderBottom: !working
                  ? "0.5rem solid rgba(49, 70, 237)"
                  : "none",
                color: !working ? "#2827A6" : "black",
              }}
              to="/"
            >
              INTRODUCTION
            </S.NavbarSelect>
            <S.NavbarSelect
              onClick={select2}
              style={{
                borderBottom: !working2
                  ? "0.5rem solid rgba(49, 70, 237)"
                  : "none",
                color: !working2 ? "#2827A6" : "black",
              }}
              to="/"
            >
              CONTENT
            </S.NavbarSelect>
          </S.NavbarList>
        </S.LinkContainer>
      </S.NavbarContainer>
    </>
  );
};
