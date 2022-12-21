import React, { useState, useEffect } from "react";
import * as S from "./styled";
import back from "src/assets/background.jpg";
import { useScrollFadeIn } from "src/hooks/useScrollFadeIn";

export const FirstPage = () => {
  const [hidden, setHidden] = useState({ status: false });
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setHidden({ status: true })
      : setHidden({ status: false });
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.2),
    1: useScrollFadeIn("up", 1, 0.7),
    2: useScrollFadeIn("up", 1, 1.5),
  };
  return (
    <S.FirstPageContainer2>
      <S.back2 src={back} alt="Background Image" />
      <S.TitleContainer2>
        <S.MainTitle2 {...animatedItem[0]}>
          밝게 빛나는 화면 속 어두운 이야기
        </S.MainTitle2>
        <S.SubTitle2 {...animatedItem[1]}>
          이로운 세상을 만드는 습관
        </S.SubTitle2>
        <S.SubText2 {...animatedItem[2]}>
          한 줄의 댓글로 쉽게 상처받을 수 있고
          <br /> 한번의 클릭으로 그 내용이 세상에 널리 퍼져나갈 수 있습니다.{" "}
          <br />
          인터넷 세상이 발전함에 따라 SNS를 통한 피해가 증가하고 있고
          <br /> 그 피해자로 하여금 죽음으로까지 내몰기도 하는 것이 악플,
          <br /> 사이버 범죄입니다.
        </S.SubText2>
      </S.TitleContainer2>
      <S.StartContainer2>
        <S.Start2 to="intro">
          <S.StartCenter2>
            <S.TextContainer2>VIEW MORE</S.TextContainer2>
            <S.ArrowContainer2>{">"}</S.ArrowContainer2>
          </S.StartCenter2>
        </S.Start2>
      </S.StartContainer2>
    </S.FirstPageContainer2>
  );
};
