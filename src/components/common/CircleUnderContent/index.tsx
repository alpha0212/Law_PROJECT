import React from "react";
import * as S from "./styled";

import { Circle } from "src/components";

export const CircleUnderContent: React.FC = () => {
  return (
    <S.Container>
      <S.TextContainer>
        악플이란 인터넷의 게시판 따위에 올려진 내용에 대해 악의적인 평가를 하여
        쓴 댓글을 말한다. <br />
        특정 인물에 대한 글이나 그 사람이 직접 올린 글에 악플을 남긴다면 중하게
        처벌을 받을 수 있으니 항상 주의해야 한다.
      </S.TextContainer>
      <Circle />
    </S.Container>
  );
};
