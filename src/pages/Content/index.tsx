import React, { useState } from "react";
import * as S from "./styled";

import DesktopPNG from "src/assets/Desktop.png";
import { CategoryTem } from "src/Template";

export const Content: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const onClicked = () => {
    setClicked(true);
    setClicked2(false);
    console.log(clicked);
  };
  const onClicked2 = () => {
    setClicked(false);
    setClicked2(true);
    console.log(clicked2);
  };
  return (
    <>
      <S.ContentBanner>
        <S.ContentBannerImg src={DesktopPNG} alt="desktop" />
      </S.ContentBanner>
      <div
        style={{
          width: "100%",
          fontSize: "1.3rem",
          marginTop: "5rem",
          textAlign: "center",
        }}
      >
        눌러서 콘텐츠를 확인해보세요!
      </div>
      <S.ChooseContainer>
        <S.SortChoose>
          <S.Choose
            onClick={onClicked}
            style={{
              transition: "all 0.3s",
              boxShadow: clicked === true ? "0.1rem 0.3rem 0.6rem #dde1f8" : "",
            }}
          >
            <S.ChooseText
              to="defamation"
              style={{ color: clicked === true ? "#2827a6" : "black" }}
            >
              사이버 명예훼손
            </S.ChooseText>
          </S.Choose>
          <S.Choose
            onClick={onClicked2}
            style={{
              transition: "all 0.3s",
              boxShadow:
                clicked2 === true ? "0.1rem 0.3rem 0.6rem #dde1f8" : "",
            }}
          >
            <S.ChooseText
              style={{ color: clicked2 === true ? "#2827a6" : "black" }}
              to="insult"
            >
              사이버 모욕
            </S.ChooseText>
          </S.Choose>
        </S.SortChoose>
      </S.ChooseContainer>
      <CategoryTem />
    </>
  );
};
