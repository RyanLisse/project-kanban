import { AddNewItem } from "./components/AddnewItem";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";

export const App = () => {
  return (
    <AppContainer>
      <Column text="Todo :" />
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={() => console.log("item created")}
      />
    </AppContainer>
  );
};
