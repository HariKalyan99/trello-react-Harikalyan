import { Modal, Space } from "antd";
import React, { useContext } from "react";
import TrelloBoardCard from "../TrelloBoardCard";
import { boardStore } from "../../store/TrelloStoreProvider";
import TrelloCheckListSpace from "../TrelloCheckListSpace/TrelloCheckListSpace";

const TrelloChecklistModal = ({
  modalOpen,
  setModalOpen,
  name,
  addCheckList,
  id,
  getCheckList
}) => {
  const {setBoardPopOpen} = useContext(boardStore);
  

  return (
    <Modal
      title={`Card Description: ${name}`}
      centered
      open={modalOpen}
      onOk={() => {
        setBoardPopOpen(false);
        setModalOpen(false)}}
      onCancel={() => {
        setBoardPopOpen(false);
        setModalOpen(false)
      }}
    >
      <TrelloBoardCard checklistActive addCheckList={addCheckList} id={id}/>

      <Space className="max-h-[100%] h-auto flex flex-col items-start my-5 w-full">
      
      {getCheckList?.length > 0 && getCheckList?.map((_,ind) => <TrelloCheckListSpace key={ind}/>)}

      </Space>
      

    
    </Modal>
  );
};

export default TrelloChecklistModal;
