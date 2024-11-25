import { Content } from "antd/es/layout/layout";
import React from "react";
import TrelloNavigation from "./TrelloNavigation";
import { Flex } from "antd";

const TrelloBoardsPage = () => {
  return (
    <>
      <TrelloNavigation boardsPage />
      <Content className="bg-slate-400 h-screen w-full flex flex-col justify-start items-center gap-1">
        <Flex >

        </Flex>
      </Content>
    </>
  );
};

export default TrelloBoardsPage;
