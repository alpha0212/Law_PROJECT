import React from "react";
import * as S from "./styled";

export const HelpIntro: React.FC = () => {
  return (
    <S.HelpIntroTextContainer>
      <S.HelpIntroTitleContainer>
        <S.HelpIntroTitle>언제 어디서든,</S.HelpIntroTitle>
        <S.HelpIntroTextFlex>
          <S.HelpIntroTitlePoint>온라인 문의</S.HelpIntroTitlePoint>
          <S.HelpIntroTitle>를 통해 간편하게 문의해보세요!</S.HelpIntroTitle>
        </S.HelpIntroTextFlex>
      </S.HelpIntroTitleContainer>
      <S.HelpIntroTitleDesc>
        인터넷 문화가 발전함에 따라 인터넷 상에서 일어나는 명예훼손, 모욕 범죄가
        위험 수위에 이르고 있다.
        <br />
        익명이라는 두터운 가면 뒤에서 기존에 지켜왔던 도덕률을 쉽게 잊어버리고
        평소에는 하지 못하는 말들을 거리낌없이 한다.
        <br />
        이러한 명예훼손, 모욕을 포함한 악플의 처벌은 점점 강화되고 있고 죄질이
        나쁠 경우 실형도 선고받을 수 있다.
      </S.HelpIntroTitleDesc>
    </S.HelpIntroTextContainer>
  );
};
