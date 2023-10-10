import { type FC } from "react";
import "./App.css";
import "../../Components/index";
import { AddButton, Typography } from "../../Components/index";
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
        <AddButton />
        <CrossSvg width={"20px"} height={"20px"} />
      </header>
    </div>
  );
};
