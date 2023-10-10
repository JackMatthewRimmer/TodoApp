"use-strict";
import {type FC} from 'react'
import './App.css';

interface AppProps {
  title: string
}

export const AppComponent: FC<AppProps> = ({title}) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {title}
        </p>

      </header>
    </div>
  );
}