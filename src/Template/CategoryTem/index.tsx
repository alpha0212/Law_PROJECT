import React from "react";
import { useLocation } from "react-router";
import { Category } from "src/components/common/Category";
import { Defamation } from "src/components/common/Category/defamation";
import { Insult } from "src/components/common/Category/insult";

export const CategoryTem: React.FC = () => {
  const location = useLocation();
  const CategoryType = location.pathname.split("/")[2];
  return (
    <Category
      CategoryType={CategoryType as any}
      defamation={<Defamation />}
      insult={<Insult />}
    />
  );
};
