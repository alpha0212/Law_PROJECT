import styled from "@emotion/styled";

export const Background = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(98, 129, 224);
`;

export const back = styled.img`
  width: 100%;
  padding-top: 100%;
`;

export const TitleContainer = styled.div`
  width: 40vw;
  position: absolute;
  @media screen and (max-width: 400px) {
    top: 21vh;
  }
  @media screen and (max-width: 36rem) {
    top: 35vw;
  }
  top: 28vw;
  z-index: 3;
  padding-left: 13%;
`;

export const MainTitle = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: #fff;
  font-size: 2.5vw;
`;

export const SubTitle = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1.5vw;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  color: rgba(255, 255, 255, 0.75);
`;

export const SubText = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1vw;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5vw;
`;

export const ScrollContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: 4;
  top: 30rem;
`;

export const ScrollHelp = styled.div`
  display: inline-block;
`;
