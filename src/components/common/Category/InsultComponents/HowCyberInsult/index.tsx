import React from "react";

import * as S from "./styled";
import {
  DefamationContainer,
  DefamationText,
  DefamationTextContainer,
} from "../../DefamationComponents/CyberDefamation/styled";

export const HowCyberInsult: React.FC = () => {
  return (
    <S.HowCyberInsultSection>
      <DefamationContainer>
        <DefamationTextContainer>
          <DefamationText style={{ letterSpacing: "0.35px" }}>
            모욕죄는 어떻게 처벌할까?
          </DefamationText>
        </DefamationTextContainer>
      </DefamationContainer>
    </S.HowCyberInsultSection>
  );
};
