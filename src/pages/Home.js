import React from "react";
import NotionRendered from "../component/NotionRendered";

const Home = () => {
    const mapPageUrl = (pageId) => `/customPage/${pageId}`;
    const InitialPageId = "39535a324b594ed78c70539588435c28";

  return (
    <>
      <NotionRendered notionId={InitialPageId} mapPageUrl={mapPageUrl} />
    </>
  );
};

export default Home;
