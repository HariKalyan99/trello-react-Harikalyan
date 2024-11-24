import React from "react";
import { Flex, Layout, Typography } from "antd";
import TrelloBoardCard from "./TrelloBoardCard";
import TrelloNavigation from "./TrelloNavigation";
const { Title } = Typography;
const { Content } = Layout;

const TrelloDashboard = () => {
  return (
    <>
      <TrelloNavigation />
      <Content className="bg-white h-full w-full flex flex-col justify-start items-center gap-1">
        <Flex
          direction="horizontal"
          className="border-b-4 border-slate-500 h-[30%] w-[70%] flex justify-center items-center"
        >
          <Title className="text-center">
            Harikalyan's <span className="text-slate-500">workspace</span>
          </Title>
        </Flex>

        <Flex className="h-full w-[70%] flex justify-center items-center flex-col ">
          <Title className="text-center w-full my-3  md:text-left">
            Boards
          </Title>
          <TrelloBoardCard />
        </Flex>
      </Content>
    </>
  );
};

export default TrelloDashboard;
