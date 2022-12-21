import React from "react";
import * as S from "./styled";

export const Content4Line: React.FC = () => {
  return (
    <S.Content4LineContainer>
      <S.Content4LineTitleContainer>
        <S.Content4LineTitle1>깨끗한 세상 </S.Content4LineTitle1>
        <S.Content4LineTitle2> 만들기</S.Content4LineTitle2>
      </S.Content4LineTitleContainer>
      <S.Content4LineTextContainer>
        <S.Content4DQM>"</S.Content4DQM>
        <S.Content4LineText>
          인터넷 세상이 발전함에 따라 SNS를 사용하는 사람들이 많아졌고 이를 통한
          피해가 점점 늘어나고 있다. <br />
          그 피해자로 하여금 죽음으로까지 내몰기도 하는 것이 악플이다. <br />
          우리는 이러한 피해가 더이상 발생하지 않도록 깨끗한 인터넷 세상을
          만들도록 노력해야 한다.
        </S.Content4LineText>
        <S.Content4DQM>"</S.Content4DQM>
      </S.Content4LineTextContainer>
    </S.Content4LineContainer>
  );
};
