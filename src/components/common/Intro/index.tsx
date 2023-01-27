import React, { useState, useEffect } from "react";
import * as S from "./styled";
import back from "src/assets/background.jpg";
import License from "src/assets/License.gif";
import { useScrollFadeIn } from "src/hooks/useScrollFadeIn";
import { MouseDown } from "src/components";

export const Intro = () => {
  const [hidden, setHidden] = useState({ status: false });
  const listenScrollEvent = () => {
    window.scrollY > 400
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
    <>
      <S.back src={License} />
      <S.TitleContainer>
        <S.MainTitle {...animatedItem[0]}>
          밝게 빛나는 화면 속 어두운 이야기
        </S.MainTitle>
        <S.SubTitle {...animatedItem[1]}>이로운 세상을 만드는 습관</S.SubTitle>
        <S.SubText {...animatedItem[2]}>
          한 줄의 댓글로 쉽게 상처받을 수 있고
          <br /> 한번의 클릭으로 그 내용이 세상에 널리 퍼져나갈 수 있습니다.{" "}
          <br />
          인터넷 세상이 발전함에 따라 SNS를 통한 피해가 증가하고 있고
          <br /> 그 피해자로 하여금 죽음으로까지 내몰기도 하는 것이 악플,
          <br /> 사이버 범죄입니다.
        </S.SubText>
      </S.TitleContainer>
      {!hidden.status ? (
        <S.ScrollContainer>
          <MouseDown />
        </S.ScrollContainer>
      ) : (
        <div></div>
      )}
    </>
  );
};
