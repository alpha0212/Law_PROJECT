import React from "react";
import * as S from "./styled";

export interface SolutionCardImgSrc {
  ImgSrc: string;
  Text: string;
}

export const SolutionThreeCard: React.FC<SolutionCardImgSrc> = ({
  ImgSrc,
  Text,
}) => {
  return (
    <S.SolutionCardElement>
      <S.SolutionCardElementIcon src={ImgSrc} />
      <S.SolutionCardTextContainer>
        <S.SolutionCardElementText>{Text}</S.SolutionCardElementText>
      </S.SolutionCardTextContainer>
    </S.SolutionCardElement>
  );
};
