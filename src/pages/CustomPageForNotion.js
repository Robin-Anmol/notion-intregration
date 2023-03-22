import React from "react";
import { useParams } from "react-router-dom";
import NotionRendered from "../component/NotionRendered";
const CustomPageForNotion = () => {
  const { notionId } = useParams();
  const mapPageUrl = (pageId) => `/customPage/${pageId}`;

  return (
    <>
      <NotionRendered notionId={notionId} mapPageUrl={mapPageUrl} />
    </>
  );
};

export default CustomPageForNotion;
