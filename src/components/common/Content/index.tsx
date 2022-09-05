import React from "react";
import * as S from "./styled";

import DesktopPNG from "src/assets/Desktop.png";

export const Content: React.FC = () => {
  return (
    <>
      <S.ContentBanner>
        <S.ContentBannerImg src={DesktopPNG} alt="desktop" />
      </S.ContentBanner>
      <S.ChooseContainer>
        <S.Choose>
          <S.ChooseText>사이버 명예훼손</S.ChooseText>
        </S.Choose>
      </S.ChooseContainer>
    </>
  );
};
