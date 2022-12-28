import React from "react";
import * as S from "./styled";

export const InsultDescription = () => {
  return (
    <S.InsultLineContainer>
      <S.InsultLineTextContainer>
        <S.InsultDQM>"</S.InsultDQM>
        <S.InsultLineText>
          정부는 인터넷 상에서 일어나는 모욕 범죄가 위험 수위에 이르는 등<br />
          <div style={{ display: "flex" }}>
            <S.InsultLinePoint>
              불법과 무질서가 계에 이르렀다고 판단하여 사이버 모욕죄 신설을 검토
            </S.InsultLinePoint>
            <div style={{ marginTop: "0.2rem" }}>하고 있으며</div>
          </div>
          아직 사이버 모욕죄가 신설되지 않았지만 타인에서 타인을 경멸하거나
          비난하는 표현을 해<br />
          모욕을 한 경우에도 일반 모욕죄와 동일하게 형법 제 311조 공연히 사람을
          모욕한 자는 <br />
          1년 이하의 징역이나 금고 또는 2백만원 이하의 벌금에 처한다.
        </S.InsultLineText>
        <S.InsultDQM>"</S.InsultDQM>
      </S.InsultLineTextContainer>
    </S.InsultLineContainer>
  );
};
