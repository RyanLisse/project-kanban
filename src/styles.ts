import tw from "tailwind-styled-components";

export const Container = tw.div`
    flex
    items-start
    justify-center
    p-5
    w-full
    bg-[3179ba]
`;

export const AppContainer = tw.div`
    flex
    items-start
    justify-start
    p-5
    w-full
    min-h-full
    bg-blue-500
`;

export const ColumnContainer = tw.div`
  bg-gray-200
  w-72
  min-h-40
  mr-20
  rounded-md
  p-2
  flex-grow-0
`;

export const ColumnTitle = tw.div`
  px-4
  py-6
  font-bold
`;

export const CardContainer = tw.div`
  bg-slate-50
  cursor-pointer
  mb-2
  py-2
  px-4
  max-w-sm
  rounded-md
  shadow-md
`;

type AdditemButtonProps = {
  dark?: boolean;
};
export const AddItemButton = tw.button`
  bg-white/25
  rounded-md
  border-none
  text-lg
  text-${(props) => (props.dark ? "black" : "white")}
  cursor-pointer
  max-w-[300px]
  px-3
  py-2.5
  text-left
  transition-colors
  w-full
  hover:bg-white/40
`;
