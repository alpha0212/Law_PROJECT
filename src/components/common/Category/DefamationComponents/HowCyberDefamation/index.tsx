import React from "react";

import {
  DefamationContainer,
  DefamationText,
  DefamationTextContainer,
} from "../CyberDefamation/styled";

import * as S from "./styled";

export const HowCyberDefamation: React.FC = () => {
  return (
    <S.HowCyberDefamationSection>
      <DefamationContainer>
        <DefamationTextContainer>
          <DefamationText style={{ letterSpacing: "0.35px" }}>
            명예훼손죄는 어떻게 처벌할까?
          </DefamationText>
        </DefamationTextContainer>
      </DefamationContainer>
      <S.HowcyberDefamationTextContainer>
        <S.HowcyberDefamationTextCenter>
          <S.HowcyberDefamationText>
            우리나라 형법과 정보통신망법에서 명예훼손을 처벌하는 규정을 자세히
            보자!
          </S.HowcyberDefamationText>
        </S.HowcyberDefamationTextCenter>
      </S.HowcyberDefamationTextContainer>
    </S.HowCyberDefamationSection>
  );
};
