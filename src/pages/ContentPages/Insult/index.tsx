import React from "react";
import * as S from "./styled";
import { CyberInsult } from "src/components";
import {
  CyberInsultText,
  Insult5Line,
  InsultCards,
} from "src/components/common/Category/InsultComponents";
import { InsultDescription } from "src/components/common/Category/InsultComponents/InsultDescription";
import { HowCyberInsult } from "src/components/common/Category/InsultComponents/HowCyberInsult";
import { HowValidatedInsult } from "src/components/common/Category/InsultComponents/HowValidatedInsult";

export const Insult: React.FC = () => {
  const settings = {
    slidesToShow: 2,
    arrows: false,
    infinite: false,
    variableWidth: true,
    autoplay: false,
    dots: false,
    speed: 700,
    focusOnSelect: true,
    centerpadding: "1000px",
  };
  return (
    <S.InsultSection>
      <S.Insult1Line>
        <CyberInsult />
        <CyberInsultText />
      </S.Insult1Line>
      <S.Insult2Line>
        <InsultDescription />
      </S.Insult2Line>
      <S.Insult3Line>
        <HowCyberInsult />
        <InsultCards settings={settings} />
      </S.Insult3Line>
      <S.Insult4Line>
        <HowValidatedInsult />
      </S.Insult4Line>
      <S.Insult5LineSection>
        <Insult5Line />
      </S.Insult5LineSection>
    </S.InsultSection>
  );
};
