import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Background = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(98, 129, 224);
`;

export const back2 = styled.img`
  width: 100%;
`;

export const TitleContainer2 = styled.div`
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

export const MainTitle2 = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: #fff;
  font-size: 2.5vw;
`;

export const SubTitle2 = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1.5vw;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  color: rgba(255, 255, 255, 0.75);
`;

export const SubText2 = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1vw;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5vw;
`;

export const FirstPageContainer2 = styled.div`
  display: flex;
  width: 100%;
`;

export const StartContainer2 = styled.div`
  margin: auto;
  position: absolute;
  top: 85rem;
  left: 43%;
`;
export const Start2 = styled(NavLink)`
  display: flex;
  width: 18rem;
  border-radius: 3.3rem;
  border: 2px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
`;

export const StartCenter2 = styled.div`
  margin: auto;
  display: flex;
`;

export const TextContainer2 = styled.div`
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  text-align: center;
  margin-left: 1.5rem;
`;

export const ArrowContainer2 = styled.div`
  padding-top: 1.15rem;
  margin-left: 1.5rem;
  font-size: 2rem;
`;
