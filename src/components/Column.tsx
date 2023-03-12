import { ColumnContainer, ColumnTitle } from "../styles";

import { AddNewItem } from "./AddnewItem";
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
      <AddNewItem
        dark="true"
        toggleButtonText="+ Add another list"
        onAdd={() => console.log("item created")}
      />
    </ColumnContainer>
  );
};
