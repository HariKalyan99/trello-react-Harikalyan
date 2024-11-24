import React from 'react'
import { Layout } from "antd";
const { Footer, } = Layout;

const TrelloFooter = () => {
  return (
    <Footer className="text-left text-white bg-slate-600 h-[3rem]">
        <span className="h-full w-full flex items-center">
          &#xa9;Trello-Mb 2024
        </span>
      </Footer>
  )
}

export default TrelloFooter