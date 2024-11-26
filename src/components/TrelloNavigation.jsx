import React from "react";
import { Avatar, Flex, Layout, Space, Tooltip } from "antd";
const { Header } = Layout;
import { IoReturnDownBackOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const TrelloNavigation = ({ boardsPage }) => {
  const linkStyle = { textDecoration: "none", color: "white" };
  return (
    <Header
      className={`h-[3rem] text-white ${
        boardsPage ? "bg-white" : "bg-slate-500"
      }`}
    >
      <Flex
        direction="vertical"
        gap="middle"
        justify="space-between"
        align="center"
        className="w-full"
      >
        {boardsPage && (
          <Tooltip placement="bottom" title="Back to dashboard">
            <Link to={"/"} style={linkStyle}>
              <Space className="h-[2rem] w-[3rem] bg-slate-900 flex justify-center hover:bg-slate-600">
                <IoReturnDownBackOutline className="text-xl cursor-pointer" />
              </Space>
            </Link>
          </Tooltip>
        )}
        <Space
          className={`h-[50px] w-[100px] ${boardsPage && "bg-black px-2"}`}
        >
          <img
            src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
            alt="trello_gif"
            className="h-[100%] w-[100%] object-contain"
          />
        </Space>
        <Avatar className="bg-black" size={35}>
          <span className="text-base">HK</span>
        </Avatar>
      </Flex>
    </Header>
  );
};

export default TrelloNavigation;
