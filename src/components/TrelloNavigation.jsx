import React from 'react';
import { Avatar, Flex, Layout, Space } from "antd";
const { Header } = Layout;

const TrelloNavigation = () => {
  return (
    <Header className="h-[3rem] text-white bg-slate-500">
        <Flex
          direction="vertical"
          gap="middle"
          justify="space-between"
          align="center"
          className="w-full"
        >
          <Space className="h-[50px] w-[80px]">
            <img
              src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
              alt="trello_gif"
              className="h-[100%] w-[100%] object-contain"
            />
          </Space>
          <Avatar className="bg-black" size={35}>
            <span className='text-base'>HK</span>
          </Avatar>
        </Flex>
      </Header>
  )
}

export default TrelloNavigation