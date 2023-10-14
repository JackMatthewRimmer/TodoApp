import { type FC } from "react";
import { CheckBoxSvg } from "../../Svgs/index";
import { useTodoContext } from "../../Hooks/useTodoContext";
interface AddButtonProps {}

export const AddButton: FC<AddButtonProps> = () => {
  const { modalActive, setModalActive } = useTodoContext();
  if (modalActive) return null;
  return (
    <CheckBoxSvg
      width={"20px"}
      height={"20px"}
      onClick={() => setModalActive(true)}
    />
  );
};
