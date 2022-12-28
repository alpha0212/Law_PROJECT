import React from "react";
import * as S from "./styled";

export const HowValidatedInsult = () => {
  return (
    <>
      <S.HowValidatedInsultTitle>
        모욕죄가 성립되려면?
      </S.HowValidatedInsultTitle>
      <S.HowValidatedInsultSetContainer>
        <S.HowValidatedInsultContainer>
          <S.HowValidatedInsultCard>
            <S.HowValidatedInsultIcon
              src={
                "https://cdn.discordapp.com/attachments/1054718420651872266/1057285490354704445/197.png"
              }
            />
            <S.HowValidatedInsultCardTitle>
              공연성
            </S.HowValidatedInsultCardTitle>
            <S.HowValidatedInsultCardText>
              전파가능성, 피해자가 모욕을 당하는 장면을
              <br /> 불특정한 제 3자가 목격한 경우 성립한다.
            </S.HowValidatedInsultCardText>
          </S.HowValidatedInsultCard>
          <S.HowValidatedInsultCard>
            <S.HowValidatedInsultIcon
              src={
                "https://cdn.discordapp.com/attachments/1054718420651872266/1057286581066661978/178.png"
              }
            />
            <S.HowValidatedInsultCardTitle>
              특정성
            </S.HowValidatedInsultCardTitle>
            <S.HowValidatedInsultCardText>
              모욕의 상대가 특정되어야 하고
              <br /> 이름을 직접적으로 말하지 않아도 주변
              <br /> 정황만으로 파악할 수 있다면 성립한다.
            </S.HowValidatedInsultCardText>
          </S.HowValidatedInsultCard>
          <S.HowValidatedInsultCard>
            <S.HowValidatedInsultIcon
              src={
                "https://cdn.discordapp.com/attachments/1054718420651872266/1057285490002374696/195.png"
              }
            />
            <S.HowValidatedInsultCardTitle>
              모욕성
            </S.HowValidatedInsultCardTitle>
            <S.HowValidatedInsultCardText>
              추상적 판단이나 경멸적인 표현과
              <br /> 눈살이 찌푸려지는 정도의 모욕이면 성립한다.
            </S.HowValidatedInsultCardText>
          </S.HowValidatedInsultCard>
        </S.HowValidatedInsultContainer>
      </S.HowValidatedInsultSetContainer>
    </>
  );
};
