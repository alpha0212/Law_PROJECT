import React from "react";
import * as S from "./styled";

export const SolutionThreeSectionDescription: React.FC = () => {
  return (
    <S.AllSolutionComponent>
      <S.SolutionThreeSectionDescriptionContainer>
        <S.SolutionThreePointContainer>
          <S.SolutionDescriptionBoxPoint>
            <S.SolutionDescriptionBoxText>
              법적대응,
            </S.SolutionDescriptionBoxText>
          </S.SolutionDescriptionBoxPoint>
          <S.SolutionThreeDescription>
            어떻게 해야할까?
          </S.SolutionThreeDescription>
        </S.SolutionThreePointContainer>
      </S.SolutionThreeSectionDescriptionContainer>
      <S.SolutionThreeSectionSmallDescriptionContainer>
        <S.SolutionThreeSectionSmallDescription>
          인터넷 문화가 발전함에 따라 인터넷 상에서 일어나는 명예훼손, 모욕
          범죄가 위험 수위에 이르고 있다.
          <br /> 익명이라는 두터운 가면 뒤에서 기존에 지켜왔던 도덕률을 쉽게
          잊어버리고 평소에는 하지 못하는 말들을 거리낌없이 한다.
        </S.SolutionThreeSectionSmallDescription>
      </S.SolutionThreeSectionSmallDescriptionContainer>
    </S.AllSolutionComponent>
  );
};
