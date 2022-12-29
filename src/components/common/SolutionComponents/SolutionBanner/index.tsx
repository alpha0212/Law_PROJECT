import React from "react";
import * as S from "./styled";

export const SolutionBanner = () => {
  return (
    <S.SolutionBannerContainer>
      <S.SolutionBanner>
        <S.SolutionTextContainer></S.SolutionTextContainer>
        <S.SolutionIllustration />
      </S.SolutionBanner>
    </S.SolutionBannerContainer>
  );
};
