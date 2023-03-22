import React, { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
// import { Code } from "react-notion-x/build/third-party/code";
// import { Collection } from "react-notion-x/build/third-party/collection";
// import { Equation } from "react-notion-x/build/third-party/equation";
// import { Modal } from "react-notion-x/build/third-party/modal";
// import { Pdf } from "react-notion-x/build/third-party/pdf";
import "./notion.css";
const NotionRendered = ({ notionId, mapPageUrl }) => {
  const [recordMap, setRecordMap] = useState({ block: {} });
  useEffect(() => {
    fetchNotionData();
  }, []);

  async function fetchNotionData() {
    const res = await fetch(
      `https://notion-api.splitbee.io/v1/page/${notionId}`
    );
    const data = await res.json();
    setRecordMap({ block: data });
    console.log(data);
  }

  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={true}
        mapPageUrl={mapPageUrl}
        className="notion-renderer"
      />
    </>
  );
};

export default NotionRendered;
