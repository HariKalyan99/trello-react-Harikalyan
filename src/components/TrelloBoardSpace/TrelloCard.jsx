import { Space } from "antd";
import React, { useState } from "react";
import TrelloChecklistModal from "../common/TrelloChecklistModal";
import { MdCancelPresentation } from "react-icons/md";


const TrelloCard = ({ id, name, delCardfromList, addCheckList }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [inputValue, setInputValue] = useState(1);

  // const 
  return (
    <>
      <TrelloChecklistModal
        inputValue={inputValue}
        setInputValue={setInputValue}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        name={name}
        id={id}
        addCheckList={addCheckList}
      />
      <Space
        key={id}
        className="w-[300px] h-full border-2 flex justify-between bg-white p-2 rounded-lg text-wrap cursor-pointer hover:shadow-lg"
        onClick={() => setModalOpen(true)}
      >
        <span >{name}</span>
        <MdCancelPresentation onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            delCardfromList(id)
        }} size={25} className="hover:text-slate-400 cursor-pointer"/>
      </Space>
    </>
  );
};

export default TrelloCard;
