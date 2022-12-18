import React from "react";

export interface CategoryTemplateProps {
  CategoryType: "defamation" | "insult";
  defamation: React.ReactNode;
  insult: React.ReactNode;
}

export const Category: React.FC<CategoryTemplateProps> = ({
  CategoryType,
  defamation,
  insult,
}) => {
  return (
    <div>
      {CategoryType === "defamation" ? defamation : <></>}
      {CategoryType === "insult" ? insult : <></>}
    </div>
  );
};
