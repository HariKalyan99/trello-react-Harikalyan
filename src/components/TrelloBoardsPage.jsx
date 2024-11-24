import { Content } from "antd/es/layout/layout";
import React from "react";
import TrelloNavigation from "./TrelloNavigation";

const TrelloBoardsPage = () => {
  return (
    <>
      <TrelloNavigation boardsPage />
      <Content className="bg-slate-400 h-full w-full flex flex-col justify-start items-center gap-1">
      </Content>
    </>
  );
};

export default TrelloBoardsPage;
