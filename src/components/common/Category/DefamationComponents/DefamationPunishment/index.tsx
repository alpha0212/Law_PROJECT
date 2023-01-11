import React from "react";
import * as S from "./styled";

export const DefamationPunishment: React.FC = () => {
  return (
    <S.YellowSection>
      <S.DetailContainer>
        <S.DetailPointContainer>
          <S.DetailRedContainer>
            <S.DetailRedPoint>
              <S.DetailRedNumber>1</S.DetailRedNumber>
            </S.DetailRedPoint>
            <S.DetailRedText>정통망법</S.DetailRedText>
          </S.DetailRedContainer>
          <S.DetailBlueContainer>
            <S.DetailBluePoint>
              <S.DetailBlueNumber>2</S.DetailBlueNumber>
            </S.DetailBluePoint>
            <S.DetailBlueText>민법</S.DetailBlueText>
          </S.DetailBlueContainer>
        </S.DetailPointContainer>
        <S.DetailTextContainer>
          <S.DetailTextOne>
            개인에 대한 사회적 평가를 저하시키는 표현에 대해서는
          </S.DetailTextOne>
          <S.DetailFlex>
            <S.DetailTextThree>사이버 명예훼손죄</S.DetailTextThree>
            <S.DetailTextTwo>로 처벌 받을 수 있고</S.DetailTextTwo>
          </S.DetailFlex>
          <S.DetailFlex style={{ marginLeft: "8.7rem" }}>
            <S.DetailTextThree>손해배상 책임</S.DetailTextThree>
            <S.DetailTextTwo>도 면할 수 없다.</S.DetailTextTwo>
          </S.DetailFlex>
        </S.DetailTextContainer>
      </S.DetailContainer>
    </S.YellowSection>
  );
};
