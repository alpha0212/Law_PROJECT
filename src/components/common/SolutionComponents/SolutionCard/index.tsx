import React from "react";
import * as S from "./styled";

export interface SolutionCardProps {
  NameText: string;
  ImgSrc: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  NameText,
  ImgSrc,
}) => {
  return (
    <S.SolutionCardContainer>
      <S.SolutionCardImg src={ImgSrc} />
      <S.SolutionCardName>
        <S.SolutionCardNameText>{NameText}</S.SolutionCardNameText>
      </S.SolutionCardName>
    </S.SolutionCardContainer>
  );
};
