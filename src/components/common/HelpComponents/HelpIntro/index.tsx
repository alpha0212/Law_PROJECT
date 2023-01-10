import React from "react";
import * as S from "./styled";

export const HelpIntro: React.FC = () => {
  return (
    <S.HelpIntroTextContainer>
      <S.HelpIntroTitleContainer>
        <S.HelpIntroTitle>언제 어디서든,</S.HelpIntroTitle>
        <S.HelpIntroTextFlex>
          <S.HelpIntroTitlePoint>온라인 문의</S.HelpIntroTitlePoint>
          <S.HelpIntroTitle>를 통해 간편하게 문의해보세요!</S.HelpIntroTitle>
        </S.HelpIntroTextFlex>
      </S.HelpIntroTitleContainer>
      <S.HelpIntroTitleDesc></S.HelpIntroTitleDesc>
    </S.HelpIntroTextContainer>
  );
};
