import { ColumnContainer, ColumnTitle } from "../styles";

import { Card } from "./Card";

type ColumnProps = {
  text: string;
};

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate app scaffold" />
      <Card text="Learn Typescript" />
      <Card text="use static typing" />
      <Card text="Another One" />
    </ColumnContainer>
  );
};
