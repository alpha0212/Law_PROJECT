import React from "react";
import * as S from "./styled";

export const Insult5Line: React.FC = () => {
  return (
    <S.Insult5LineContainer>
      <S.Insult5LineTitle>어떤 경우가 모욕에 해당할까?</S.Insult5LineTitle>
      <S.Insult5LineDesc>
        이러한 것들은 모두 피해자의 인격적 가치에 한 사회적 평가를 저하시킬 만한
        표현에 해당되어 모욕죄가 성립한다.
      </S.Insult5LineDesc>
      <S.Insult5ContentContainer>
        <S.OneBox>
          <S.BoxText style={{ marginTop: "2.7rem" }}>
            부모님을 언급하는 폐륜적 언행
          </S.BoxText>
        </S.OneBox>
        <S.TwoBox>
          <S.BoxText style={{ marginTop: "2rem" }}>모멸감 주는 언행</S.BoxText>
        </S.TwoBox>
        <S.ThreeBox>
          <S.BoxText style={{ marginTop: "2.5rem" }}>
            비속어를 포함한 댓글을 작성하는 행위
          </S.BoxText>
        </S.ThreeBox>
        <S.FourBox>
          <S.BoxText style={{ marginTop: "1.2rem" }}>성적인 발언</S.BoxText>
        </S.FourBox>
        <S.CircleContainer>
          <S.Circle />
          <S.stick />
          <S.MStick />
          <S.MCircle />
          <S.SCircle />
          <S.SStick />
        </S.CircleContainer>
      </S.Insult5ContentContainer>
    </S.Insult5LineContainer>
  );
};
