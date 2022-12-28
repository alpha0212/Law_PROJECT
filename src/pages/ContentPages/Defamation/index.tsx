import React from "react";
import * as S from "./styled";
import { CyberDefamation } from "src/components";
import { CyberDefamationText } from "src/components/common/Category/DefamationComponents/CyberDefamationText/index";
import { HowCyberDefamation } from "src/components/common/Category/DefamationComponents/HowCyberDefamation";
import { DefamationCards } from "src/components/common/Category/DefamationComponents/DefamationCards";
import { DefamationPunishment } from "src/components/common/Category/DefamationComponents/DefamationPunishment";
import { HowValidatedDefamation } from "src/components/common/Category/DefamationComponents/HowValidatedDefamation";

export const Defamation: React.FC = () => {
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
    <S.DefamationSection>
      <S.Defamation1Line>
        <CyberDefamation />
        <CyberDefamationText />
      </S.Defamation1Line>
      <S.Defamation2Line>
        <HowCyberDefamation />
        <DefamationCards settings={settings} />
      </S.Defamation2Line>
      <S.Defamation3Line>
        <DefamationPunishment />
      </S.Defamation3Line>
      <S.Defamation4Line>
        <HowValidatedDefamation />
      </S.Defamation4Line>
    </S.DefamationSection>
  );
};
