import React from "react";
import { useLocation } from "react-router";
import { Category } from "src/components/common/Category";
import { Defamation, Insult } from "src/pages";

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
