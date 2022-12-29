import React from "react";
import * as S from "./styled";
import {
  HorizontalLine,
  SolutionBanner,
  SolutionOneSection,
  SolutionThreeCard,
  SolutionThreeSectionDescription,
  SolutionTwoSection,
} from "src/components/common/SolutionComponents/";
import { SolutionFourDescription } from "src/components/common/SolutionComponents/SolutionFourSection/styled";
import { SolutionFourSection } from "../../components/common/SolutionComponents/SolutionFourSection/index";

export const SolutionPage: React.FC = () => {
  return (
    <S.Solution>
      <SolutionBanner />
      <SolutionOneSection />
      <SolutionTwoSection />
      <S.SolutionThreeSection>
        <SolutionThreeSectionDescription />
        <S.SolutionThreeCardContainer>
          <S.SolutionThreeCardCenterPos>
            <SolutionThreeCard
              Text="일반적인 모욕죄와 명예훼손에 해당하는 경우에는 상대방의 인적 사항을 확보하여 명예훼손을 한 사실을 바탕으로 고소장을 작성하여 경찰서에 접수를 한다."
              ImgSrc="https://cdn.discordapp.com/attachments/1054718420651872266/1057287106688450700/203.png"
            />
            <SolutionThreeCard
              Text="상대방을 특정하기 힘든 경우 수사기관에 해당 아이디를 사용한 사람의 인적 사항을 확보, 소환하여 조사하는 수사를 진행하고 처벌을 받을 수 있도록 해야 한다."
              ImgSrc="https://cdn.discordapp.com/attachments/1054718420651872266/1057287106088681582/72.png"
            />
          </S.SolutionThreeCardCenterPos>
          <S.SolutionHorizontalContainer>
            <HorizontalLine />
          </S.SolutionHorizontalContainer>
        </S.SolutionThreeCardContainer>
      </S.SolutionThreeSection>
      <SolutionFourSection
        ImgSrc={
          "https://cdn.discordapp.com/attachments/1054718420651872266/1057287645639737405/74.png"
        }
        TextOneLine={
          "하지만 이런 부분이 진행되는 것을 기대하는 것이 쉬은일이 아니다. "
        }
        TextTwoLine={
          "고소 진행이 되기 힘들다거나 아이디를 이용하는 사람의 인적 사항을 알아올 것을 요구하며 고소인을 돌려보내는 경우가 태반이기 때문이다. "
        }
        TextThreeLine={
          "법적 대응을 하고자 할 때는 사건의 객관적인 증거와 정황, 그리고 법적으로 어떤 것에 해당하는지를 정확히 아는 법적 지식이 필요하다. "
        }
        TextFourLine={
          "본인의 힘으로 판단하고자 하면 불분명함 때문에 손해를 입을 수 있으므로 변호인과 조력하여"
        }
        TextFiveLine={
          "해당 내용을 검토하여 성립 요건이 해당이 되는지, 전문적으로 파헤쳐 볼 필요가 있다."
        }
      />
    </S.Solution>
  );
};
