import React, { useState, useEffect } from "react";

import * as S from "./styled";

export const FirstHeader: React.FC = () => {
  const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState("transparent");
  const [titleColor, settitleColor] = useState("#ffffff");
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
          Law
        </S.Logo>
      </S.NavbarContainer>
    </>
  );
};
