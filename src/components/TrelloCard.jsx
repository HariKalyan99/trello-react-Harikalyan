import { Space } from "antd";
import React, { useState } from "react";
import TrelloChecklistModal from "./common/TrelloChecklistModal";
import { MdCancelPresentation } from "react-icons/md";


const TrelloCard = ({ id, name, delCardfromList }) => {
  const [modal2Open, setModal2Open] = useState(false);

  const [inputValue, setInputValue] = useState(1);
  return (
    <>
      <TrelloChecklistModal
        inputValue={inputValue}
        setInputValue={setInputValue}
        modal2Open={modal2Open}
        setModal2Open={setModal2Open}
        name={name}
      />
      <Space
        key={id}
        className="w-[300px] h-full border-2 flex justify-between bg-white p-2 rounded-lg text-wrap"
        onClick={() => setModal2Open(true)}
      >
        <span >{name}</span>
        <MdCancelPresentation onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            delCardfromList(id)
        }} size={25} className="hover:text-slate-400"/>
      </Space>
    </>
  );
};

export default TrelloCard;
