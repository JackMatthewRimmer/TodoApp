import { type FC } from "react";
import { CheckBoxSvg } from "../../Svgs/index";

interface AddButtonProps {}

export const AddButton: FC<AddButtonProps> = () => {
  return (
    <CheckBoxSvg
      width={"20px"}
      height={"20px"}
      onClick={() => alert("hello")}
    />
  );
};
