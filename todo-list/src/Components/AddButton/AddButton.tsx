import { SetStateAction, type FC, type Dispatch } from "react";
import { CheckBoxSvg } from "../../Svgs/index";
interface AddButtonProps {
  launchModal: Dispatch<SetStateAction<boolean>>;
}

export const AddButton: FC<AddButtonProps> = ({ launchModal }) => {
  return (
    <CheckBoxSvg
      width={"20px"}
      height={"20px"}
      onClick={() => launchModal(true)}
    />
  );
};
