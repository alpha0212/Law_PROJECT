import React from "react";
import * as S from "./styled";

export interface SolutionFourText {
  ImgSrc: string;
  TextOneLine: string;
  TextTwoLine: string;
  TextThreeLine: string;
  TextFourLine: string;
  TextFiveLine: string;
}

export const SolutionFourSection: React.FC<SolutionFourText> = ({
  ImgSrc,
  TextOneLine,
  TextTwoLine,
  TextThreeLine,
  TextFourLine,
  TextFiveLine,
}) => {
  return (
    <S.SolutionFourSectionContainer>
      <S.SolutionFourSectionIcon src={ImgSrc} />
      <S.SolutionFourDescriptionContainer>
        <S.SolutionFourDescription>{TextOneLine}</S.SolutionFourDescription>
        <S.SolutionFourDescription>{TextTwoLine}</S.SolutionFourDescription>
        <S.SolutionFourDescription>{TextThreeLine}</S.SolutionFourDescription>
        <S.SolutionFourDescription>{TextFourLine}</S.SolutionFourDescription>
        <S.SolutionFourDescription>{TextFiveLine}</S.SolutionFourDescription>
      </S.SolutionFourDescriptionContainer>
    </S.SolutionFourSectionContainer>
  );
};
