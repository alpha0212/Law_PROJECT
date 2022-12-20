import React from "react";
import * as S from "./styled";

export const ContentDescription: React.FC = () => {
  return (
    <S.ContentDescriptionSection>
      <S.ContentDescriptionTitleContainer>
        <S.ContentDescriptionTitle>
          사이버 명예훼손과 사이버 모욕
        </S.ContentDescriptionTitle>
      </S.ContentDescriptionTitleContainer>
      <S.ContentDescriptionMainTextContainer>
        <S.ContentDescriptionMainText>
          가나다라마바사
        </S.ContentDescriptionMainText>
      </S.ContentDescriptionMainTextContainer>
    </S.ContentDescriptionSection>
  );
};
