import { type FC } from "react";
import "./App.css";
import "../../Components/index";
import { Typography } from "../../Components/index";
import { CheckBoxSvg, CrossSvg } from "../../Svgs/index";

interface AppProps {}

export const AppComponent: FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Typography
          text="Hello World"
          fontSize="50"
          fontColour="white"
        ></Typography>
        <CheckBoxSvg></CheckBoxSvg>
        <CrossSvg></CrossSvg>
      </header>
    </div>
  );
};
