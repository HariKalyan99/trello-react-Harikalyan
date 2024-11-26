import { Modal, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import TrelloBoardCard from "../TrelloBoardCard";
import { boardStore } from "../../store/TrelloStoreProvider";
import TrelloCheckListSpace from "../TrelloCheckListSpace/TrelloCheckListSpace";
import axios from "axios";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;



const TrelloChecklistModal = ({
  modalOpen,
  setModalOpen,
  name,
  addCheckList,
  id,
  getCheckList
}) => {
  const {setBoardPopOpen} = useContext(boardStore);
  const [checkListArray, setChecklistArray] = useState(getCheckList)

  useEffect(() => {
    const getCardCheckList = async(id) => {
      try {
        const {data} = await axios.get(`https://api.trello.com/1/cards/${id}/checklists?key=${APIKey}&token=${APIToken}`)
        setChecklistArray(data);
      } catch (error) {
        console.log(error)
      }
    }

    if(id?.length > 0){
      getCardCheckList(id);
    }

  }, [getCheckList])

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
      
      {checkListArray?.length > 0 && checkListArray?.map((_,ind) => <TrelloCheckListSpace key={ind}/>)}

      </Space>
      

    
    </Modal>
  );
};

export default TrelloChecklistModal;
