import React from "react";
import * as S from "./styled";

import { CircleUnderContent } from "src/components";

export const HalfCircle: React.FC = () => {
  return (
    <S.maliciouscomments>
      <CircleUnderContent />
      <S.CircleContainer>
        <S.TitleCircle>
          <S.TitleText>악플?</S.TitleText>
        </S.TitleCircle>
      </S.CircleContainer>
    </S.maliciouscomments>
  );
};
