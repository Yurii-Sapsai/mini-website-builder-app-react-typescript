import { FC } from "react";
import './App.sass';

import BlockList from "./components/BlockList/BlockList";
import Workspace from "./components/Workspace/Workspace";
import RenderArea from "./components/RenderArea/RenderArea";



const App: FC = () => {

  return (
    <div className="wrapper">
      <BlockList />
      <Workspace />
      <RenderArea />
    </div>
  );
}

export default App;
