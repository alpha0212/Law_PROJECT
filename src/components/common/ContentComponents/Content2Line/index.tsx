import React from "react";
import * as S from "./styled";

export const Content2Line: React.FC = () => {
  return (
    <S.Content2LineContainer>
      <S.Content2LineCenterContainer>
        <S.Content2LineTextContainer>
          <S.Content2LineOneTextContainer>
            <S.Content2LineOneText>
              명예훼손, 모욕 등을 당했을 시에
            </S.Content2LineOneText>
          </S.Content2LineOneTextContainer>
          <S.Content2LineTwoTextContainer>
            <S.Content2LineTwoText>
              그 즉시 강경한 입장에서
              <br />
              법적으로 대응해야 더 큰 피해를 줄일 수 있습니다.
            </S.Content2LineTwoText>
          </S.Content2LineTwoTextContainer>
        </S.Content2LineTextContainer>
        <S.Content2LineRedBlueContainer>
          <S.Content2LineRed></S.Content2LineRed>
          <S.Content2LineBlue></S.Content2LineBlue>
        </S.Content2LineRedBlueContainer>
      </S.Content2LineCenterContainer>
    </S.Content2LineContainer>
  );
};
