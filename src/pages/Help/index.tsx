import React from "react";
import { HelpCard, HelpHowCanI, HelpIntro } from "src/components";
import * as S from "./styled";

export const HelpPage: React.FC = () => {
  return (
    <S.HelpContainer>
      <S.OneSection>
        <HelpIntro />
      </S.OneSection>
      <S.TwoSection>
        <HelpHowCanI />
        <S.TwoSectionCardComponent>
          <HelpCard
            MarginWidth={6}
            ImgSrc={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286949364314122/61.png"
            }
            CardName={"법률 상담센터"}
            CardDescOneLine={"상담을 통해 법률 도움을 드립니다."}
            CardDescTwoLine={"법으로 해결 하는 것이 더 큰 피해를 막습니다!"}
            CardDescThreeLine={"고민하지 마시고 언제든 연락 주세요."}
            ButtonText={"상담하러 가기"}
          />
          <HelpCard
            MarginWidth={6}
            ImgSrc={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286949657919508/63.png"
            }
            CardName={"마음 치료센터"}
            CardDescOneLine={"상담을 통해 여러분의 마음을 읽고 치료해드립니다."}
            CardDescTwoLine={"상처 난 마음 달래기 위해 저희가 있습니다."}
            CardDescThreeLine={"부담갖지 마시고 언제든 연락해 주세요!"}
            ButtonText={"상담하러 가기"}
          />
          <HelpCard
            MarginWidth={6}
            ImgSrc={
              "https://cdn.discordapp.com/attachments/1054718420651872266/1057286950098317332/65.png"
            }
            CardName={"그 외 문의"}
            CardDescOneLine={"그 외 궁금한 점이 있으시면 언제든 문의 주세요!"}
            CardDescTwoLine={"ㅤ"}
            CardDescThreeLine={"ㅤ"}
            ButtonText={"문의하러 가기"}
          />
        </S.TwoSectionCardComponent>
      </S.TwoSection>
    </S.HelpContainer>
  );
};
