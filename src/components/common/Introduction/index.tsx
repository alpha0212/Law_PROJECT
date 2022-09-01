import React from "react";

import * as S from "./styled";
import { useScrollFadeIn } from "src/hooks/useScrollFadeIn";
import { HalfCircle } from "src/components";

export const Introduction: React.FC = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.2),
    1: useScrollFadeIn("up", 1, 0.7),
    2: useScrollFadeIn("up", 1, 0.7),
  };
  return (
    <>
      <S.IntroductionContainer>
        <S.firstContainer>
          <S.first {...animatedItem[0]}>
            위는 대부분의 악플로 힘들어하는 사람의 모습입니다.
          </S.first>
          <S.Second {...animatedItem[1]}>이 사이트의 목적</S.Second>
          <S.Three {...animatedItem[2]}>
            인터넷 문화가 발전함에 따라 인터넷 상에서 일어나는 명예훼손, 모욕
            범죄가 위험 수위에 이르고 있다.
            <br />
            익명이라는 두터운 가면 뒤에서 기존에 지켜왔던 도덕률을 쉽게
            잊어버리고 평소에는 하지 못하는 말들을 거리낌없이 한다.
            <br />
            이러한 명예훼손, 모욕을 포함한 악플의 처벌은 점점 강화되고 있고
            죄질이 나쁠 경우 실형도 선고받을 수 있다. <br />
            인터넷 세상이 발전하는데에 힘입어 SNS를 통한 피해가 다수 발생하고 그
            피해자로 하여금 죽음으로까지 내몰기도 한다. <br />
            악플의 처벌 가능성과 심각성을 알리고 넷상 피의자와 피해자가 없는
            깨끗한 인터넷 세상이 만들어지기를 바란다.
            <br />
          </S.Three>
        </S.firstContainer>
        <S.SecondContainer>
          <HalfCircle />
        </S.SecondContainer>
      </S.IntroductionContainer>
    </>
  );
};
