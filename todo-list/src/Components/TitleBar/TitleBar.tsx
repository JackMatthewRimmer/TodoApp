import { type FC } from "react";
import { Typography } from "../Typography/Typography";
import "./TitleBar.css";
import { LogoSvg } from "../../Svgs";

interface TitleBarProps {}

export const TitleBar: FC<TitleBarProps> = () => {
  return (
    <div className="TitleBar">
      <Typography
        text="Todo List"
        fontWeight={"bold"}
        fontSize="25px"
        fontColour="white"
      />
      <div className="TitleLogoDiv">
        <LogoSvg width={"25px"} height={"25px"} />
      </div>
    </div>
  );
};
