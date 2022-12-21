import React from "react";
import * as S from "./styled";

export const CyberDefamationText: React.FC = () => {
  return (
    <>
      <S.cyberDefamationTextContainer>
        <S.cyberDefamationTextCenter>
          <S.cyberDefamationText>
            사이버 명예훼손이란 인터넷 상에서 다른 사람의 이름이나 인격, 신분
            등의 사회적 평가에 해를 끼쳐 손해를 입히는 일을 말한다.
            <br /> 우리나라에서는 사이버 상에서 사실 혹은 거짓의 사실을 드러낸
            명예훼손을
            <br /> 정보통신망 이용촉진 및 정보보호에 관한 법률, 이하 정통망법 제
            70조 1항과 2항에서 규정하고 있다.
          </S.cyberDefamationText>
        </S.cyberDefamationTextCenter>
      </S.cyberDefamationTextContainer>
    </>
  );
};
