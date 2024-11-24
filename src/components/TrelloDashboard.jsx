import React from 'react'
import { Flex, Layout, Typography} from "antd";
import TrelloBoardCard from './TrelloBoardCard';
const { Title } = Typography;
const { Content } = Layout;

const TrelloDashboard = () => {
  return (
    <Content className="bg-white h-full w-full flex flex-col justify-start items-center gap-1">
        <Flex
          direction="horizontal"
          className="border-b-4 border-slate-500 h-[30%] w-[70%] flex justify-center items-center"
        >
          <Title className="text-center">Harikalyan's <span className='text-slate-500'>workspace</span></Title>
        </Flex>

        <Flex
          direction="horizontal"
          className="h-full  w-[70%] flex justify-center items-center flex-col"
        >
          <Title className="text-left w-full my-3">Boards</Title>
          <TrelloBoardCard />
        </Flex>
      </Content>
  )
}

export default TrelloDashboard;