import React from "react";
import * as S from "./styled";

export const CyberInsultText: React.FC = () => {
  return (
    <S.cyberInsultTextContainer>
      <S.cyberInsultTextCenter>
        <S.cyberInsultText>
          사이버 모욕이란 인터넷 상에서 다른사람을 깔보고 욕되게 하는 일을
          말한다.
          <br /> 우리나라 형법 33장 명예에 관한 죄 제 5절 제 311조에서는
          모욕죄를 구성하고 인터넷 상에서 일어나는 모든 모욕은
          <br /> 모두 형법 제 311조 모욕죄에 의해 처벌한다.
        </S.cyberInsultText>
      </S.cyberInsultTextCenter>
    </S.cyberInsultTextContainer>
  );
};
