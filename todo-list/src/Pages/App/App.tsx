import { type FC } from "react";
import "./App.css";
import "../../Components/index";
import { Typography } from "../../Components/index";

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
      </header>
    </div>
  );
};
