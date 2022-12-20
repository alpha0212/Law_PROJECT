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
          사이버 명예훼손이란 인터넷 상에서 다른 사람의 이름이나 인격, 신분 등의
          사회적 평가에 해를 끼쳐 손해를 입히는 일을 말하고
          <br />
          사이버 모욕이란 인터넷 상에서 다른 사람을 깔보고 욕되게 하는 일을
          말한다.
          <br />
          간단해 보이지만 흔히 일어나는 이러한 사이버 범죄는 점점 심각한
          수준으로 발생하고 있는데, <br />
          이에 대해 더 자세히 알아보도록 하자!
        </S.ContentDescriptionMainText>
      </S.ContentDescriptionMainTextContainer>
    </S.ContentDescriptionSection>
  );
};
