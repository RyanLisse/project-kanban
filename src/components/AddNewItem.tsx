import { AddItemButton } from "../styles";
import { useState } from "react";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: string; // Change type to string
};

export const AddNewItem = ({
  onAdd,
  toggleButtonText,
  dark,
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    // We show item creation form here
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
