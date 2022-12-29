import React from "react";
import * as S from "./styled";

export const SolutionTwoSection: React.FC = () => {
  return (
    <S.SolutionTwoSectionContainer>
      <S.SolutionTwoSectionTextContainer>
        <S.SolutionTwoSectionText>
          상대방의 언행으로 입은
        </S.SolutionTwoSectionText>
        <S.SolutionTwoSectionTextPoint>
          정신적 피해에 대한{" "}
          <S.SolutionTwoSectionTextBold>
            손해배상을 청구
          </S.SolutionTwoSectionTextBold>
          하여
        </S.SolutionTwoSectionTextPoint>
        <S.SolutionTwoSectionText>
          별도의 상을 받는 방법도 고려하여 초기부터 전략을 마련한다면 <br />{" "}
          더욱 긍정적 결과에 도달할 수 있을 것이다.
        </S.SolutionTwoSectionText>
      </S.SolutionTwoSectionTextContainer>
      <S.SolutionTwoSectionRBContainer>
        <S.SolutionTwoSectionB />
        <S.SolutionTwoSectionR />
      </S.SolutionTwoSectionRBContainer>
    </S.SolutionTwoSectionContainer>
  );
};
