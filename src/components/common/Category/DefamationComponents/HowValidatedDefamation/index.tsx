import React from "react";
import * as S from "./styled";

export const HowValidatedDefamation = () => {
  return (
    <>
      <S.HowValidatedDefamationTitle>
        사이버 명예훼손죄가 성립되려면?
      </S.HowValidatedDefamationTitle>
      <S.HowValidatedDefamationSetContainer>
        <S.HowValidatedDefamationContainer>
          <S.HowValidatedDefamationCard>
            <S.HowValidatedDefamationIcon
              src={
                "https://cdn.discordapp.com/attachments/1054718420651872266/1057285490354704445/197.png"
              }
            />
            <S.HowValidatedDefamationCardTitle>
              공연성
            </S.HowValidatedDefamationCardTitle>
            <S.HowValidatedDefamationCardText>
              불특정 또는 다수인이 인식할 수 있는 상태
              <br /> 인터넷 상에서 일어난 사이버 명예훼손죄는
              <br /> 무조건 공연성이 성립한다
            </S.HowValidatedDefamationCardText>
          </S.HowValidatedDefamationCard>
          <S.HowValidatedDefamationCard>
            <S.HowValidatedDefamationIcon
              src={
                "https://cdn.discordapp.com/attachments/1054718420651872266/1057285490648301618/201.png"
              }
            />
            <S.HowValidatedDefamationCardTitle>
              사실/허위 사실의 적시
            </S.HowValidatedDefamationCardTitle>
            <S.HowValidatedDefamationCardText>
              의견과 사실이 구변이 필요하다.
              <br /> 사실일 경우 특정인의 사회적 가치 내지 평가가
              <br /> 침해될 가능성이 있을 정도로 구체성을 띄어야 한다.
            </S.HowValidatedDefamationCardText>
          </S.HowValidatedDefamationCard>
          <S.HowValidatedDefamationCard>
            <S.HowValidatedDefamationIcon
              src={
                "https://cdn.discordapp.com/attachments/1054718420651872266/1057285490002374696/195.png"
              }
            />
            <S.HowValidatedDefamationCardTitle>
              비방할 목적
            </S.HowValidatedDefamationCardTitle>
            <S.HowValidatedDefamationCardText>
              피해자를 불이익하게 할
              <br /> 일체의 목적을 말한다.
            </S.HowValidatedDefamationCardText>
          </S.HowValidatedDefamationCard>
        </S.HowValidatedDefamationContainer>
      </S.HowValidatedDefamationSetContainer>
    </>
  );
};
