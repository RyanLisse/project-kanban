import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";

import { useFocus } from "../utlis/useFocus";
import { useState } from "react";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
