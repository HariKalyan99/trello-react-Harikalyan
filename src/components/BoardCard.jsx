import { Card, Space, Spin, Tooltip } from 'antd';
import React, { useContext } from 'react'
import { IoTrashBinSharp } from 'react-icons/io5';
import { MdOutlineGroup } from 'react-icons/md';
import { boardStore } from '../store/TrelloStoreProvider';

const BoardCard = ({name, id}) => {
    const {boardSpinShow, delBoardFn, boardSpinId} = useContext(boardStore);
    const cardBack = {
        backgroundImage:
          'linear-gradient(180deg,rgba(53, 68, 99, 0.6),rgba(53, 68, 99, 0.4)), url("https://images.unsplash.com/photo-1557626204-59dd03fd2d31?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundPosition: "10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
  return (
    <Card
    hoverable
    style={cardBack}
    className="h-[90px] w-[250px] flex justify-between items-start bg-slate-500 flex-col relative"
  >
    <span className="text-lg w-[100%] text-white">{name}</span>
    <MdOutlineGroup className="text-sm text-slate-100" />

    {boardSpinShow  && boardSpinId === id ? 
    <Space className="absolute top-2 right-3">
    <Spin spinning={boardSpinShow} delay={500} size="small"/>
    </Space> : 
    <Tooltip placement="top" title={`remove "${name}"`}>
     <Space className="absolute top-2 right-3">
        <IoTrashBinSharp
          className="text-white text-xl hover:text-red-400"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            delBoardFn(id);
          }}
        />
      </Space> 
    </Tooltip>}
  </Card>
  )
}


export default BoardCard
