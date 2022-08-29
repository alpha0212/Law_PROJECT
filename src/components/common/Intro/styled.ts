import styled from "@emotion/styled";

export const Background = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(98, 129, 224);
`;

export const back = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 3vh;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  width: 40vw;
  position: absolute;
  z-index: 3;
  @media screen and (max-width: 400px) {
    top: 20.5vh;
  }
  top: 42%;
  z-index: 3;
  padding-left: 13%;
`;

export const MainTitle = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: #fff;
  font-size: 2.5vw;
`;

export const subTitle = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1.5vw;
  margin-top: 1.5vh;
  color: rgba(255, 255, 255, 0.75);
`;
