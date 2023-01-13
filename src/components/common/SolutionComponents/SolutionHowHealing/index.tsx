import React from "react";
import * as S from "./styled";

export interface HowHealingProps {
  HealingText: string;
}

export const SolutionHowHealing: React.FC<HowHealingProps> = ({
  HealingText,
}) => {
  return (
    <S.HowHealingBox>
      <S.RedCross>
        <S.RedCrossHor />
        <S.RedCrossVer />
      </S.RedCross>
      <S.HowHealingText>{HealingText}</S.HowHealingText>
    </S.HowHealingBox>
  );
};
