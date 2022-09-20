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
        <S.InfoText>+82 010-1234-5678</S.InfoText>
        <S.InfoText>abcdefg@naver.com</S.InfoText>
        <S.InfoText>
          00마음치료센터 | 00법률상담센터 | 상담사 000님 외 8명
        </S.InfoText>
        <S.InfoText>국가법령정보센터 | 현장피해보고센터</S.InfoText>
        <S.InfoText>
          서울특별시 서대문구 Copyright(c) P&G All rights reserved.
        </S.InfoText>
      </S.InfoTextContainer>
    </S.FooterContainer>
  );
};
