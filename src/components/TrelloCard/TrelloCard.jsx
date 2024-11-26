import { Space } from "antd";
import React, { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";
import TrelloChecklistModal from "../TrelloCheckListSpace/TrelloChecklistModal";
import { GoChecklist } from "react-icons/go";
import axios from "axios";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;
const TrelloCard = ({ id, name, delCardfromList, addCheckList, getCheckList }) => {
  const [modalOpen, setModalOpen] = useState(false);

  // const [checkItemDone, setCheckItemDone] = useState({completed: 0, total: 0});

  // useEffect(() => {
  //   const fetchAllCheckItems = async(id) => {
  //     try {
        
  //       const {data} = await axios.get(`https://api.trello.com/1/boards/${id}?fields=name&checklists=all&key=${APIKey}&token=${APIToken}`);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   if(id?.length > 1){
  //     fetchAllCheckItems(id)
  //   }
  // }, [])


  // const 
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
        <Space className="flex flex-col">
        <span >{name}</span>
        {/* <span className={`flex justify-center items-center gap-2 ${checkItemDone?.completed === checkItemDone?.total && "bg-green-800"} px-1`}><GoChecklist /> {checkItemDone?.completed}/{checkItemDone?.total}</span> */}
        </Space>
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
