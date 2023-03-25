import React from "react";
import * as S from "./styled";

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.InfoContainer>
        <S.Info>Contact</S.Info>
        <S.Info>Email</S.Info>
        <S.Info>With</S.Info>
        <S.Info>Reference</S.Info>
        <S.Info>About</S.Info>
      </S.InfoContainer>
      <S.InfoTextContainer>
        <S.InfoText>+82 010-3914-5112</S.InfoText>
        <S.InfoText>alpha_owo@naver.com</S.InfoText>
        <S.InfoText>{" "}</S.InfoText>
        <S.InfoText>{" "}</S.InfoText>
        <S.InfoText>
          서울특별시 서대문구 Copyright(c) P&G All rights reserved.
        </S.InfoText>
      </S.InfoTextContainer>
    </S.FooterContainer>
  );
};
