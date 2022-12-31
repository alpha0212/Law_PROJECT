import React from "react";
import * as S from "./styled";

export const SolutionBanner = () => {
  return (
    <S.SolutionBannerContainer>
      <S.SolutionBanner>
        <S.SolutionTextContainer>
          <S.SolutionSmallPoint>사이버 범죄</S.SolutionSmallPoint>
          <S.FlexContainer>
            <S.SolutionPoint>어떻게 해결</S.SolutionPoint>
            <S.SolutionSmallPoint>해야할까?</S.SolutionSmallPoint>
          </S.FlexContainer>
          <S.SolutionIntroDescription>
            어떤 경우에 처벌 가능한지 살펴보고
            <br /> 법적으로 해결하는 방법, 상처입은 마음 치료하는 방법 등
            전문가와의 상담을 통해
            <br /> 해결하도록 하자.
          </S.SolutionIntroDescription>
        </S.SolutionTextContainer>
        <S.SolutionIllustrationContainer>
          <S.SolutionIllustration />
        </S.SolutionIllustrationContainer>
      </S.SolutionBanner>
    </S.SolutionBannerContainer>
  );
};
