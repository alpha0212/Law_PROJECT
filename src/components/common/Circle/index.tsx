import React from "react";
import * as S from "./styled";

import ThreeXPNG from "src/assets/ThreeX.png";
import XhandPNG from "src/assets/Xhand.png";
import XXXPNG from "src/assets/XXX.png";

export const Circle: React.FC = () => {
  return (
    <S.AllContainer>
      <S.center>
        <S.CircleContaner>
          <S.CircleImgBox>
            <S.CircleImg src={ThreeXPNG} />
          </S.CircleImgBox>
          <S.CircleImgBox>
            <S.CircleImg src={XhandPNG} />
          </S.CircleImgBox>
          <S.CircleImgBox>
            <S.CircleImg src={XXXPNG} />
          </S.CircleImgBox>
        </S.CircleContaner>
        <S.CircleUnderContainer>
          <S.CircleUnder>
            <S.CircleUnderText>사이버 명예훼손</S.CircleUnderText>
          </S.CircleUnder>
          <S.CircleUnder>
            <S.CircleUnderText>사이버 모욕</S.CircleUnderText>
          </S.CircleUnder>
          <S.CircleUnderThree>
            <S.CircleUnderText>그 외 상처가 될 수 있는 말들</S.CircleUnderText>
          </S.CircleUnderThree>
        </S.CircleUnderContainer>
      </S.center>
    </S.AllContainer>
  );
};
