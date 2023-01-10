import React from "react";
import { HelpIntro } from "src/components";
import * as S from "./styled";

export const HelpPage: React.FC = () => {
  return (
    <S.OneSection>
      <HelpIntro />
    </S.OneSection>
  );
};
