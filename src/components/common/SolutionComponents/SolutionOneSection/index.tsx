import React from "react";
import * as S from "./styled";

export const SolutionOneSection: React.FC = () => {
  return (
    <S.SolutionOneSectionContainer>
      <S.SolutionOneSectionPoint>
        악플로 처벌 가능한 경우
      </S.SolutionOneSectionPoint>
      <S.SolutionOneSectionText>
        보통 사이버 상에서 이루어지는 관련 사건은 명예훼손과 모욕죄의 요건들을
        충족할 가능성이 높다.
        <br /> 특정 인물에 대한 글이나 그 사람이 직접 올린 글에 악플을 남긴다는
        것은 그 피해자를 특정할 수 있으며,
        <br /> 누구나 제한 없이 해당 글을 볼 수 있으므로 공연성 또한 성립되기에
        해당 글이 분명히 명예를 실추시킬 만한
        <br /> 내용임이 증명된다면 처벌을 받을 것이다. 그러므로 사안을 가벼이
        여길 것이 아니라 전문 변호사를 통해
        <br /> 적극적으로 대처를 하는 것이 바람직한데 특히 피해를 입은
        입장에서는 신고 전에 우선 문제 원이 된 게시물,
        <br /> 대화 등을 캡처하여그 증거를 남기는 것이 중요하다. URL이 있다면
        모두 보이도록 캡쳐를 하며,
        <br /> 채팅의 경우 가해자의 아이디가 명확히 보이도록 이미지를 저장해야
        한다.
        <br />
      </S.SolutionOneSectionText>
    </S.SolutionOneSectionContainer>
  );
};
