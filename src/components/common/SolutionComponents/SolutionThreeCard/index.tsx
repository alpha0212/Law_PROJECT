import React from "react";
import * as S from "./styled";

export interface SolutionCardImgSrc {
  ImgSrc: string;
  OneLineText: string;
  TwoLineText: string;
  ThreeLineText: string;
  FourLineText: string;
}

export const SolutionThreeCard: React.FC<SolutionCardImgSrc> = ({
  ImgSrc,
  OneLineText,
  TwoLineText,
  ThreeLineText,
  FourLineText,
}) => {
  return (
    <S.SolutionCardElement>
      <S.SolutionCardElementIcon src={ImgSrc} />
      <S.SolutionCardTextContainer>
        <S.SolutionCardElementText>{OneLineText}</S.SolutionCardElementText>
        <S.SolutionCardElementText>{TwoLineText}</S.SolutionCardElementText>
        <S.SolutionCardElementText>{ThreeLineText}</S.SolutionCardElementText>
        <S.SolutionCardElementText>{FourLineText}</S.SolutionCardElementText>
      </S.SolutionCardTextContainer>
    </S.SolutionCardElement>
  );
};
