import { Space } from "antd";
import React, { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import TrelloChecklistModal from "../TrelloCheckListSpace/TrelloChecklistModal";

const TrelloCard = ({
  id,
  name,
  delCardfromList,
  addCheckList,
  getCheckList,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TrelloChecklistModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        name={name}
        cardId={id}
        addCheckList={addCheckList}
        getCheckList={getCheckList}
      />
      <Space
        key={id}
        className="w-[300px] h-full border-2 flex justify-between bg-white p-2 rounded-lg text-wrap cursor-pointer hover:shadow-lg"
        onClick={() => setModalOpen(true)}
      >
        <Space className="flex flex-col justify-start items-start">
          <span>{name}</span>
          {/* <Progress percent={result} type="circle" size={[20, 20]} strokeColor={progressColors}/> */}
        </Space>
        <MdCancelPresentation
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            delCardfromList(id);
          }}
          size={25}
          className="hover:text-slate-400 cursor-pointer"
        />
      </Space>
    </>
  );
};

export default TrelloCard;
