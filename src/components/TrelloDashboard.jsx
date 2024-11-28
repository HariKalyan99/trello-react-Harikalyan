import React, { useContext } from "react";
import { Flex, Layout, Spin, Typography } from "antd";
import TrelloBoardCard from "./TrelloBoardCard";
import TrelloNavigation from "./TrelloNavigation";
import { boardStore } from "../store/TrelloStoreProvider";
const { Title } = Typography;
const { Content } = Layout;

const TrelloDashboard = () => {
  const {createBoardSpinShow} = useContext(boardStore)
  return (
    <>
      <TrelloNavigation />
      <Content className="bg-white h-screen w-full flex flex-col justify-start items-center gap-1">
        <Flex
          direction="horizontal"
          className="border-b-4 border-slate-500 h-[30%] w-[70%] flex justify-center items-center"
        >
          <Title className="text-center">
            Harikalyan's <span className="text-slate-500">workspace</span>
          </Title>
        </Flex>

        <Flex className="h-full w-[70%] flex justify-start items-center flex-col ">
          <Title className="text-center w-full my-3  lg:text-left">
            Boards
            {createBoardSpinShow && <Spin spinning={createBoardSpinShow} percent={100} fullscreen /> }
          </Title>
          <TrelloBoardCard />
        </Flex>
      </Content>
    </>
  );
};

export default TrelloDashboard;
