import styled from "@emotion/styled";

export const HelpCanIContainer = styled.div<{ marginWidth: number }>`
  margin-right: ${(props) => props.marginWidth}rem;
  margin-left: ${(props) => props.marginWidth}rem;
`;

export const HelpCardImg = styled.img``;

export const HelpCardName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.2px;
  line-height: 28px;
  color: #231815;
  margin-top: 3.4rem;
`;
export const HelpCardDesc = styled.div`
  font-size: 1.4rem;
  font-weight: medium;
  letter-spacing: 0.14px;
  color: #231815;
  line-height: 18px;
  margin-top: 0.4rem;
`;

export const ToGoButton = styled.button`
  width: 17.2rem;
  height: 4.4rem;
  border-radius: 3rem;
  border: 2px solid #919fe6;
  border-radius: 2.2rem;
  background: #ffffff;
  margin-top: 3.1rem;
  color: #919fe6;
  :hover {
    color: #ffffff;
    background: #919fe6;
  }
`;

export const ToGoButtonText = styled.div`
  font-size: 1.8rem;
  font-weight: medium;

  text-align: center;
`;
