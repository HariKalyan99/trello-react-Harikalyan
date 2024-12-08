import { Modal, Space, Spin } from "antd";
import React, { useContext, useEffect, useState } from "react";
import TrelloBoardCard from "../TrelloBoardCard";
import { boardStore } from "../../store/TrelloStoreProvider";
import TrelloCheckListSpace from "./TrelloCheckListSpace";
import CheckListCalls from "../utils/checkListApiServices";
const { getAllCheckLists, removeChecklist } = new CheckListCalls();

const TrelloChecklistModal = ({
  modalOpen,
  setModalOpen,
  name,
  addCheckList,
  cardId,
  getCheckList,
}) => {
  // This segment uses the technique called state uplifting and props drilling which are responsible for state management, and some of the CRUD operations are taking place in the Modal components

  const { setBoardPopOpen } = useContext(boardStore);
  const [checkListArray, setChecklistArray] = useState([]);
  const [getDeleteCheckList, setDeleteCheckList] = useState("");
  const [spinShow, setSpinShow] = useState(false);

  useEffect(() => {
    const getCardCheckList = async (id) => {
      try {
        const data = await getAllCheckLists(
          "https://api.trello.com/1/cards/",
          id
        );
        setChecklistArray(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (cardId?.length > 0) {
      getCardCheckList(cardId);
    }
  }, [getCheckList]);

  useEffect(() => {
    const delCardCheckList = async (id) => {
      try {
        setSpinShow(true);
        const res = await removeChecklist(
          "https://api.trello.com/1/checklists/",
          id
        );
        if (res === "Checklist Deleted") {
          setSpinShow(false);

          setChecklistArray(checkListArray.filter((x) => x.id !== id));
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (getDeleteCheckList?.length > 0) {
      delCardCheckList(getDeleteCheckList);
    }
  }, [getDeleteCheckList]);

  const deleteCheckList = (id) => {
    setDeleteCheckList(id);
  };

  return (
    <Modal
      title={`Card Description: ${name}`}
      centered
      open={modalOpen}
      onOk={() => {
        setBoardPopOpen(false);
        setModalOpen(false);
      }}
      onCancel={() => {
        setBoardPopOpen(false);
        setModalOpen(false);
      }}
    >
      <TrelloBoardCard
        checklistActive
        addCheckList={addCheckList}
        id={cardId}
      />
      <Space className="max-h-[100%] h-auto flex flex-col items-start my-5 w-full">
        <Spin spinning={spinShow} delay={500}>
          {checkListArray &&
            checkListArray?.map(({ id, name }, ind) => (
              <TrelloCheckListSpace
                checkListArray={checkListArray}
                cardId={cardId}
                deleteCheckList={deleteCheckList}
                id={id}
                name={name}
                key={ind}
              />
            ))}
        </Spin>
      </Space>
    </Modal>
  );
};

export default TrelloChecklistModal;
