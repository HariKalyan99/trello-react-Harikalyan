import { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import TrelloNavigation from "./TrelloNavigation";
import { Flex, Space } from "antd";
import { useParams } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import TrelloListCard from "./TrelloListCard";

const TrelloBoardsPage = () => {
  const { id } = useParams();

  const [addCardActive, setAddCardActive] = useState(false);

  // useEffect(() => {

  // }, [])

  return (
    <>
      <TrelloNavigation boardsPage />
      <Content className="bg-slate-400 h-screen w-full flex flex-col justify-start items-center gap-1">
        <Flex className="scrollableFlex w-[99%] flex overflow-x-auto justify-start items-start max-w-[200rem] margin-0 h-[100%] gap-2 py-3">
          <TrelloListCard
            setAddCardActive={setAddCardActive}
            addCardActive={addCardActive}
          />

          <Space className="min-h-[10%] h-auto min-w-[20%] flex justify-around items-center flex-col rounded bg-white">
            <span>List</span>
          </Space>
          <Space className="min-h-[10%] h-auto min-w-[20%] flex justify-around items-center flex-col rounded bg-white">
            <span>List</span>
          </Space>
          <Space className="min-h-[10%] h-auto min-w-[20%] flex justify-around items-center flex-col rounded bg-white">
            <span>List</span>
          </Space>
          <TrelloListCard
            setAddCardActive={setAddCardActive}
            addCardActive={addCardActive}
          />
          <Space className="min-h-[10%] h-auto min-w-[20%] flex justify-around items-center flex-col rounded bg-white">
            <span>List</span>
          </Space>
          <Space className="min-h-[10%] h-auto min-w-[20%] flex justify-around items-center flex-col rounded bg-white">
            <span>List</span>
          </Space>
          <Space className="min-h-[10%] h-auto min-w-[20%] flex justify-around items-center flex-col rounded bg-white">
            <span>List</span>
          </Space>
          <Space className="min-h-[10%] h-auto min-w-[20%] flex justify-around items-center flex-col rounded bg-white">
            <span>List</span>
          </Space>
        </Flex>
      </Content>
    </>
  );
};

export default TrelloBoardsPage;
