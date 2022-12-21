import React from "react";
import * as S from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface SlideSettingTypes {
  settings: any;
}

export const DefamationCards: React.FC<SlideSettingTypes> = ({ settings }) => {
  return (
    <S.DefamationCardContainer>
      <S.CarouselStyled {...settings}>
        <S.DefamationCard></S.DefamationCard>
        <S.DefamationCard></S.DefamationCard>
        <S.DefamationCard></S.DefamationCard>
        <S.DefamationCard></S.DefamationCard>
        <S.DefamationCard></S.DefamationCard>
      </S.CarouselStyled>
    </S.DefamationCardContainer>
  );
};
