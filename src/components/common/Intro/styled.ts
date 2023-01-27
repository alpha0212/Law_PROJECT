import styled from "@emotion/styled";

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Background = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(98, 129, 224);
`;

export const back = styled.img`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 20vw;
  z-index: 3;
  padding-left: 13%;
`;

export const MainTitle = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: #fff;
  font-size: 4.8rem;
  @media screen and (max-width: 1150px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 1150px) {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 2.9rem;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  color: rgba(255, 255, 255, 0.75);
  @media screen and (max-width: 1150px) {
    font-size: 2rem;
  }
`;

export const SubText = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 2.9rem;

  @media screen and (max-width: 1150px) {
    line-height: 2rem;
    font-size: 1.3rem;
  }
`;

export const ScrollContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: 4;
  top: 15vw;
`;

export const ScrollHelp = styled.div`
  display: inline-block;
`;
