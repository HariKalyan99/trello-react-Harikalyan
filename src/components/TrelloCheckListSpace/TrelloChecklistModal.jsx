import { Modal, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import TrelloBoardCard from "../TrelloBoardCard";
import { boardStore } from "../../store/TrelloStoreProvider";
import TrelloCheckListSpace from "./TrelloCheckListSpace";
import axios from "axios";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;



const TrelloChecklistModal = ({
  modalOpen,
  setModalOpen,
  name,
  addCheckList,
  cardId,
  getCheckList,

}) => {
  const {setBoardPopOpen} = useContext(boardStore);
  const [checkListArray, setChecklistArray] = useState([]);
  const [getDeleteCheckList, setDeleteCheckList] = useState("");
 

  useEffect(() => {
    const getCardCheckList = async(id) => {
      try {
        const {data} = await axios.get(`https://api.trello.com/1/cards/${id}/checklists?key=${APIKey}&token=${APIToken}`)
        setChecklistArray(data);
      } catch (error) {
        console.log(error)
      }
    }

    if(cardId?.length > 0){
      getCardCheckList(cardId);
    }

  }, [getCheckList])



  useEffect(() => {
    const delCardCheckList = async(id) => {
      try {
        await axios.delete(`https://api.trello.com/1/checklists/${id}?key=${APIKey}&token=${APIToken}`)
        setChecklistArray(checkListArray.filter(x => x.id !== id));
      } catch (error) {
        console.log(error)
      }
    }

    if(getDeleteCheckList?.length > 0){
      delCardCheckList(getDeleteCheckList);
    }

  }, [getDeleteCheckList])


  

  const deleteCheckList = (id) => {
    setDeleteCheckList(id);
  }




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
      <TrelloBoardCard checklistActive addCheckList={addCheckList} id={cardId}/>

      <Space className="max-h-[100%] h-auto flex flex-col items-start my-5 w-full">
      
      {checkListArray && checkListArray?.map(({id, name},ind) => <TrelloCheckListSpace checkListArray={checkListArray} cardId={cardId} deleteCheckList={deleteCheckList} id={id} name={name} key={ind}/>)}

      </Space>
      

    
    </Modal>
  );
};

export default TrelloChecklistModal;
