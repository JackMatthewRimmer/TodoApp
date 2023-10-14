import { type FC } from "react";
import { Typography } from "../Typography/Typography";
import "./TitleBar.css";

interface TitleBarProps {}

export const TitleBar: FC<TitleBarProps> = () => {
  return (
    <u className="TitleBar">
      <Typography
        text="Todo List"
        fontWeight={"bold"}
        fontSize="25px"
        fontColour="white"
      />
    </u>
  );
};
