import "@/App.scss";
import { RootRouter } from "@/router/router";
import React from "react";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <RootRouter />
    </div>
  );
};

export default App;
