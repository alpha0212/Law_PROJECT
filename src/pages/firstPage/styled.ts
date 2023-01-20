import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Background = styled.div`
  position: relative;
  width: 100%;
  background-color: rgba(98, 129, 224);
`;

export const back2 = styled.img`
  width: 1550vw;
`;

export const TitleContainer2 = styled.div`
  width: 100%;
  position: absolute;
  top: 40rem;
  z-index: 3;
  padding-left: 11.5%;
  @media screen and (max-width: 500px) {
    padding-left: 10%;
    top: 25rem;
  }
`;

export const MainTitle2 = styled.div`
  font-family: Pretendard;
  font-weight: bold;
  color: #fff;
  font-size: 4.8rem;
  @media screen and (max-width: 1000px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle2 = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 2.9rem;
  margin-top: 2.5vh;
  margin-bottom: 2.5vh;
  color: rgba(255, 255, 255, 0.75);
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.7rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SubText2 = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 2.9rem;
  @media screen and (max-width: 1000px) {
    line-height: 2rem;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const FirstPageContainer2 = styled.div`
  display: flex;
  width: 100%;
`;

export const StartContainer2 = styled.div`
  margin: auto;
  position: absolute;
  top: 79rem;
  @media screen and (min-width: 1550px) {
    top: 50vw;
  }
  @media screen and (max-width: 500px) {
    left: 27%;
    top: 62rem;
  }
  left: 43%;
`;
export const Start2 = styled(NavLink)`
  display: flex;
  width: 18rem;
  border-radius: 3.3rem;
  border: 2px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  :hover {
    color: #180f84;
    background: white;
  }
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
