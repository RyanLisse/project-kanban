import { CustomDragLayerContainer, DragPreviewWrapper } from "../styles";

import { Card } from "./Card";
import { Column } from "./Column";
import { useAppState } from "../state/AppStateContext";
import { useDragLayer } from "react-dnd";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "COLUMN" ? (
          <Column id={draggedItem.id} text={draggedItem.text} isPreview />
        ) : (
          <Card
            columnId={draggedItem.columnId}
            isPreview
            id={draggedItem.id}
            text={draggedItem.text}
          />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
