import React from "react";
import * as S from "./styled";
import PersonPNG from "src/assets/Person.png";
import PeoplePNG from "src/assets/People.png";

//circle
export const Different = () => {
  return (
    <>
      <S.differentContainer>
        <S.LeftCircleContainer>
          <S.sCircle />
          <S.LeftbCircle />
        </S.LeftCircleContainer>
        <S.textContainer>
          <S.b>비방</S.b>
          <S.s>과</S.s>
          <S.b>비판</S.b>
          <S.s>은 달라요!</S.s>
        </S.textContainer>
        <S.RightCircleContainer>
          <S.RightbCircle />
          <S.sCircle />
        </S.RightCircleContainer>
      </S.differentContainer>
      <S.vsContainer>
        <S.marginFlexContainer>
          <S.PersonImg src={PersonPNG} />
          <S.vs>VS</S.vs>
          <S.PeopleImg src={PeoplePNG} />
        </S.marginFlexContainer>
        <S.onlyFlex>
          <S.oneContainer>
            <S.oneAndOne>비방과 비난</S.oneAndOne>
            <S.one>비판</S.one>
          </S.oneContainer>
        </S.onlyFlex>
      </S.vsContainer>
      <S.DescriptionContainer>
        <S.Description>
          비방, 비난, 그리고 비판의 사전적 의미를 살펴보자면
        </S.Description>
        <S.Description>
          남을 비웃고 헐뜯어서 말하는 것, 남의 잘못이나 결점을 책잡아서 나쁘게
          말하는 것을 비방과 비난이라고 한다.
        </S.Description>
        <S.Description>
          현상이나 사물의 옳고 그름을 판단하여 밣히거나 잘못된 점을 지적하는
          것을 비판이라고 한다.
        </S.Description>
        <S.Description>
          비방, 비난과 비판은 엄연히 다르며 비판, 혹은 의견 표출이라고 하여 생각
          표현을 지나치게 자유롭게 하다보면
        </S.Description>
        <S.Description>
          자연스럽게 누군가에 대한 비방과 비난의 글이 될 수 있고 그로 인해
          처벌을 받을 가능성이 생기게 되므로
        </S.Description>
        <S.Description>
          항상 주의하며 글을 작성하는 등의 인터넷 활동을 해야 한다.
        </S.Description>
      </S.DescriptionContainer>
    </>
  );
};
