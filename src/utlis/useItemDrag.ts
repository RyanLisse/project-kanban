import { DragItem } from "../state/Dragitem";
import { getEmptyImage } from "react-dnd-html5-backend";
import { setDraggedItem } from "../state/actions";
import { useAppState } from "../state/AppStateContext";
import { useDrag } from "react-dnd";
import { useEffect } from "react";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
  return { drag };
};
