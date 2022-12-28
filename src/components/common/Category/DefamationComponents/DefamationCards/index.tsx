import React from "react";
import * as S from "./styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface SlideSettingTypes {
  settings: any;
}

export const DefamationCards: React.FC<SlideSettingTypes> = ({ settings }) => {
  return (
    <S.DefamationCardContainer>
      <S.CarouselStyled {...settings}>
        <S.DefamationCard>
          <S.DefamationCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286077955706890/193.png"
            }
          />
          <S.DefamationTitle>
            사실/허위 사실적시에 의한 명예훼손
          </S.DefamationTitle>
          <S.DefamationText>
            공연히 사실 혹은 허위 사실을 적시하여 사람의 명예를 훼손한 자는
            <br /> 2년 이하의 징역이나 금고 또는 5백만원 이하의 벌금 혹은
            <br /> 5년 이하의 징역, 10년 이하의 자격정지 또는 천만원 이하의
            벌금에 처함
          </S.DefamationText>
        </S.DefamationCard>
        <S.DefamationCard>
          <S.DefamationCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286078324813954/202.png"
            }
          />
          <S.DefamationTitle>사자의 명예훼손</S.DefamationTitle>
          <S.DefamationText>
            공연히 허위의 사실을 적시하여 사자의 명예를 훼손하 자는
            <br /> 2년 이하의 징역, 10년 이하의 자격정지 또는 1천만원 이하의
            벌금에 처함
          </S.DefamationText>
        </S.DefamationCard>
        <S.DefamationCard>
          <S.DefamationCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286078702297119/106.png"
            }
          />
          <S.DefamationTitle>
            사실/허위 사실 적시 출판물 등에 의한 명예훼손
          </S.DefamationTitle>
          <S.DefamationText>
            사람을 비방할 목적으로 신문, 잡지 또는 라디오 기타 출판물에 의해
            <br /> 사실/허위 사실적시에 의한 명예훼손 죄를 범한 자는 <br />
            3년 이하의 징역이나 금고 꼬는 7백만원 이하의 벌금 혹은 <br />
            7년 이하의 징역, 10년 이하의 자격정지 또는 1천5백만원 이하의 벌금에
            처함
          </S.DefamationText>
        </S.DefamationCard>
        <S.DefamationCard>
          <S.DefamationCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286079033651270/118.png"
            }
          />
          <S.DefamationTitle>
            사이버 상에서 사실/거짓의 사실을 드러낸 명예훼손
          </S.DefamationTitle>
          <S.DefamationText>
            사람을 비방할 목적으로 정보통신망을 통해 공공연하기
            <br />
            사실 혹은 허위의 사실을 드러내어 다른 사람의 명예를 훼손한 자는{" "}
            <br />
            3년 이하의 징역이나 금고 또는 2천만원 이하의 벌금 혹은 <br /> 7년
            이하의 징역, 10년 이하의 자격정지 또는 5천만원 이하의 벌금에 처함
          </S.DefamationText>
        </S.DefamationCard>
        <S.DefamationCard>
          <S.DefamationCardIcon
            src={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286077607583774/115.png"
            }
          />
          <S.DefamationTitle>허위사실 유포 명예훼손</S.DefamationTitle>
          <S.DefamationText>
            인터넷 게시판이나 블로그 또는 SNS 단체 카톡방에서 악성 댓글을 달거나
            <br />
            다른 사람을 비방하고 헐뜯고 허위사실을 올리는 사람은 허위사실 유포에
            의한 <br />
            명예훼손으로 처벌하는 범죄
          </S.DefamationText>
        </S.DefamationCard>
      </S.CarouselStyled>
    </S.DefamationCardContainer>
  );
};
