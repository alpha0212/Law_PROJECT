import React from "react";
import * as S from "./styled";

export interface HelpCardProps {
  ImgSrc: string;
  CardName: string;
  CardDescOneLine: string;
  CardDescTwoLine: string;
  CardDescThreeLine: string;
  ButtonText: string;
  MarginWidth: number;
}

export const HelpCard: React.FC<HelpCardProps> = ({
  ImgSrc,
  CardName,
  CardDescOneLine,
  CardDescTwoLine,
  CardDescThreeLine,
  ButtonText,
  MarginWidth,
}) => {
  return (
    <S.HelpCanIContainer marginWidth={MarginWidth}>
      <S.HelpCardImg src={ImgSrc} />
      <S.HelpCardName>{CardName}</S.HelpCardName>
      <S.HelpCardDesc>{CardDescOneLine}</S.HelpCardDesc>
      <S.HelpCardDesc>{CardDescTwoLine}</S.HelpCardDesc>
      <S.HelpCardDesc>{CardDescThreeLine}</S.HelpCardDesc>
      <S.ToGoButton>
        <S.ToGoButtonText>{ButtonText}</S.ToGoButtonText>
      </S.ToGoButton>
    </S.HelpCanIContainer>
  );
};
