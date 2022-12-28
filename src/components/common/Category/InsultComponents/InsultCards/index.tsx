import React from "react";
import * as S from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface SlideSettingTypes {
  settings: any;
}

export const InsultCards: React.FC<SlideSettingTypes> = ({ settings }) => {
  return (
    <S.InsultCardContainer>
      <S.CarouselStyled {...settings}>
        <S.InsultCard>
          <S.InsultCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286477890986104/159.png"
            }
          />
          <S.InsultTitle>모욕죄</S.InsultTitle>
          <S.InsultText>
            공연히 사람을 모욕한 자는 <br />
            1년 이하의 징역이나 금고 또는 2백만원 이하의 벌금에 처한다.
          </S.InsultText>
        </S.InsultCard>
        <S.InsultCard>
          <S.InsultCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286478213943346/164.png"
            }
          />
          <S.InsultTitle>
            그 외 공포심, 불안감 유발하는 범죄에 대한 규정
          </S.InsultTitle>
          <S.InsultText>
            공포심이나 불안감을 유발하는 부호, 문언, 음향, 화상 또는 영상을
            <br /> 반복적으로 상대방에게 도달하게 한 자는
            <br /> 1년 이하의 징역 또는 1천만원 이하의 벌금에 처한다.
          </S.InsultText>
        </S.InsultCard>
        <S.InsultCard>
          <S.InsultCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286478666932264/167.png"
            }
          />
          <S.InsultTitle>성적인 모욕 발언</S.InsultTitle>
          <S.InsultText>
            성적 수치심이나 혐오감을 일으키는 말, 음향, 글, 그림, 영상 또는
            물건을
            <br /> 상대방에게 도달하게 한 자는 성폭력 범죄 처벌 등에 관한
            특례법에 따라
            <br /> 2년 이하의 징역 또는 5백만원 이하의 벌금에 처한다.
          </S.InsultText>
        </S.InsultCard>
        <S.InsultCard>
          <S.InsultCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286478994084011/173.png"
            }
          />
          <S.InsultTitle>그 외 경범죄</S.InsultTitle>
          <S.InsultText>
            정당한 사유 없이 다른사람에게 전화, 문자메세지, 편지,
            <br /> 전자우편, 전자 문서 등을 여러차례 되풀이하여 괴롭힌 자는
            <br /> 10만원 이하의 벌금, 구류 또는 과료의 형으로 처벌
          </S.InsultText>
        </S.InsultCard>
      </S.CarouselStyled>
    </S.InsultCardContainer>
  );
};
