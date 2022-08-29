import React, { useState, useEffect } from "react";

import * as S from "./styled";

export const Navbar: React.FC = () => {
  const [working, setWorking] = useState(true);
  const [working2, setWorking2] = useState(true);
  const select = () => {
    setWorking(false);
    setWorking2(true);
  };
  const select2 = () => {
    setWorking2(false);
    setWorking(true);
  };
  //scroll
  const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  useEffect(() => {
    console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });
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
                paddingBottom: "1.5rem",
                color: !working ? "rgba(156, 158, 225)" : "black",
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
                paddingBottom: "1.5rem",
                color: !working2 ? "rgba(156, 158, 225)" : "black",
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
