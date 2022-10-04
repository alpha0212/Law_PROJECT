import styled from "@emotion/styled";

export const ContentBanner = styled.div``;
export const ContentBannerImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ChooseContainer = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
`;

export const SortChoose = styled.div`
  display: flex;
  margin: auto;
`;

export const Choose = styled.button`
  width: 14rem;
  height: 3rem;
  &:hover {
    box-shadow: 0.1rem 0.3rem 0.6rem #dde1f8;
  }
  border-radius: 1.4rem;
  border: none;
  justify-content: center;
  margin: 5rem 3rem 0 3rem;
  background: none;
`;

export const ChooseText = styled.div`
  &:hover {
    color: #2827a6;
  }
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  padding: 0.5rem 0rem;
`;
