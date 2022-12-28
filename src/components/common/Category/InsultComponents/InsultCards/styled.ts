import styled from "@emotion/styled";
import Slider from "react-slick";
export const CarouselStyled = styled(Slider)`
  margin-bottom: 13rem;
  margin-top: 4rem;

  .slick-track {
    height: 32rem;
  }
  .slick-list {
    margin: auto;
    width: 60%;
    display: block;
    overflow: hidden;
  }
  .slick-slide {
    width: 41.2rem;
  }
  .slick-dots {
    margin-bottom: -2rem;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #4c51ff;
  }
`;

export const InsultCard = styled.div`
  background: #fff;
  width: 41.2rem;
  height: 28.7rem;
  border: 1px solid #f3f3f3;
  border-radius: 3rem;
  box-shadow: 1px 3px 6px #00000029;
  display: flex;
  flex-direction: column;
`;

export const InsultCardContainer = styled.div`
  width: 100%;
  height: 50rem;
  margin-top: 10rem;
`;

export const InsultCardIcon = styled.img`
  margin: auto;
  padding-top: 47px;
`;

export const InsultTitle = styled.div`
  text-align: center;
  letter-spacing: 0.16px;
  color: #231815;
  font-size: 1.8rem;
  font-weight: 900;
  padding-top: 2.2rem;
`;

export const InsultText = styled.div`
  height: 45px;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.1px;
  color: #231815;
  padding-top: 10px;
  line-height: 1.8rem;
`;
