// import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from "react-notion-x";
import { Code } from "react-notion-x/build/third-party/code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { Modal } from "react-notion-x/build/third-party/modal";
import { Pdf } from "react-notion-x/build/third-party/pdf";
// import { NotionAPI } from "notion-client/build";
// import  NotionAPI  from "notion-client";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CustomPageForNotion from "./pages/CustomPageForNotion";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/customPage/:notionId" Component={CustomPageForNotion} />
    </Routes>
  );
}

export default App;
