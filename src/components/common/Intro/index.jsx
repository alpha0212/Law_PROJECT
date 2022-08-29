import React from "react";
import * as S from "./styled";
import back from "src/assets/background.jpg";
import { useScrollFadeIn } from "src/hooks/useScrollFadeIn";

export const Intro = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.2),
    1: useScrollFadeIn("up", 1, 0.7),
  };
  return (
    <S.Background>
      <S.back src={back} alt="Background Image" />
      <S.TitleContainer>
        <S.MainTitle {...animatedItem[0]}>
          밝게 빛나는 화면 속 어두운 이야기
        </S.MainTitle>
        <S.subTitle {...animatedItem[1]}>이로운 세상을 만드는 습관</S.subTitle>
      </S.TitleContainer>
    </S.Background>
  );
};
