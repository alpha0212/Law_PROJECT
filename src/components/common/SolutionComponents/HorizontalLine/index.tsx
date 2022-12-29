import React from "react";
import * as S from "./styled";

export const HorizontalLine: React.FC = () => {
  return (
    <S.HorizontalLineCenter>
      <S.HorizontalLineContainer>
        <S.horizontal />
        <S.rotatoBox />
        <S.horizontal />
      </S.HorizontalLineContainer>
    </S.HorizontalLineCenter>
  );
};
