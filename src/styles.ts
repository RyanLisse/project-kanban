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
  dark?: boolean | string;
};

export const AddItemButton = tw.button<AdditemButtonProps>`
  bg-white/25
  rounded-md
  border-none
  text-lg
  ${(props) => (props.dark ? "text-black" : "text-white")}
  cursor-pointer
  max-w-[300px]
  px-3
  py-2.5
  text-left
  transition-colors
  w-full
  hover:bg-white/40
  hover:text-black
`;

export const NewItemFormContainer = tw.div`
  max-w-sm
  flex
  flex-col
  w-full
  items-start
  bg-white
  rounded-lg
  shadow-md
  p-4
`;

export const NewItemButton = tw.button`
  bg-green-500 
  hover:bg-green-700 
  text-white 
  font-bold 
  py-2 
  px-4 
  rounded
`;

export const NewItemInput = tw.input`
  appearance-none

  p-3  
  mb-4
  leading-tight

  focus:shadow-outline
  flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-300
`;
