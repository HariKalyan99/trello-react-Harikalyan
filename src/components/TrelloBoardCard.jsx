import React, { useContext, useRef } from "react";
import { Flex, Card, Button, Tooltip, Space, Popover, Spin } from "antd";
import { boardStore } from "../store/TrelloStoreProvider";
import { Skeleton } from "antd";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { MdCancelScheduleSend } from "react-icons/md";
import BoardCard from "./BoardCard";

const TrelloBoardCard = ({ checklistActive, addCheckList, id }) => {
  const { boardList, addBoardFn, skeletonLoad, boardPopOpen, setBoardPopOpen } =
    useContext(boardStore);
  // This segment uses the context API and via the central store repository which is added in the store is responsible for state management.


  const boardRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoardPopOpen(false);
    addBoardFn(boardRef.current.value);
    boardRef.current.value = "";
  };

  const handleSubmitChecklist = (e) => {
    e.preventDefault();
    addCheckList(boardRef.current.value, id);
    boardRef.current.value = "";
    setBoardPopOpen(!boardPopOpen);
  };

  const content = (
    <form
      id={`${checklistActive ? "checkListForm" : "boardForm"}`}
      onSubmit={(e) =>
        checklistActive ? handleSubmitChecklist(e) : handleSubmit(e)
      }
      className={`flex h-[150px] flex-col justify-around text-xl`}
    >
      <input
        placeholder={`${
          checklistActive ? "Add your checklist here.." : "enter the board name"
        }`}
        required
        className="h-[30%] p-3 border rounded"
        ref={boardRef}
      />
      {checklistActive ? (
        <div className="h-full flex justify-end gap-2  items-center px-2">
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 w-[30%] text-base rounded text-white h-[30%]"
          >
            Add
          </button>

          <MdCancelScheduleSend
            className="text-black hover:text-slate-300 cursor-pointer"
            size={30}
            onClick={() => setBoardPopOpen(!boardPopOpen)}
          />
        </div>
      ) : (
        <>
          <button
            type="submit"
            className="bg-slate-500 hover:bg-slate-700 w-[30%] text-base rounded text-white h-[20%]"
          >
            Add
          </button>

          <MdCancel
            className="text-red-200 hover:text-red-300"
            size={40}
            onClick={() => setBoardPopOpen(!boardPopOpen)}
          />
        </>
      )}
    </form>
  );

  const stopCreatingBoard = (
    <Space className="flex">
      <span className="text-base">You are not allowed to add more baords</span>
      <div className="h-[30px] w-[30px] flex justify-center items-center">
        <IoMdClose
          className="text-slate-900 hover:text-xl hover:text-slate-500"
          onClick={() => setBoardPopOpen(!boardPopOpen)}
        />
      </div>
    </Space>
  );

  return (
    <>
      {checklistActive ? (
        <Flex
          wrap
          direction="horizontal"
          className=" w-[100%] gap-3 justify-center lg:justify-start"
        >
          <Popover
            content={content}
            title="Add checklist"
            open={boardPopOpen}
            placement="left"
          >
            <Card
              hoverable
              className="h-[40px] w-[200px] flex justify-center items-center bg-slate-500"
              onClick={() => setBoardPopOpen(true)}
            >
              <span className="text-lg w-[100%] h-full text-black flex justify-center items-center gap-2">
                <GoChecklist className="text-slate-900" /> Add Checklist
              </span>
            </Card>
          </Popover>
        </Flex>
      ) : (
        <Flex
          wrap
          direction="horizontal"
          className=" w-[100%] gap-3 justify-center lg:justify-start"
        >
          <Tooltip
            placement="top"
            title={<span>{10 - boardList?.length} remaining</span>}
          >
            <Popover
              content={boardList?.length === 10 ? stopCreatingBoard : content}
              title="Add a board"
              open={boardPopOpen}
              placement="bottomRight"
            >
              <Card
                hoverable
                className="h-[90px] w-[250px] flex justify-center items-center bg-slate-300"
                onClick={() => setBoardPopOpen(true)}
              >
                <span className="text-lg w-[100%] h-full text-white">
                  Create new board
                </span>
              </Card>
            </Popover>
          </Tooltip>
          {skeletonLoad === true
            ? [1, 2, 3, 4, 5, 6, 7].map((num, ind) => (
                <Skeleton.Node
                  key={ind}
                  active
                  style={{ width: 250, height: 90 }}
                />
              ))
            : boardList.map(({ name, id }) => (
                <Link to={`/boards/${id}`} key={id}>
                  <BoardCard name={name} id={id} />
                </Link>
              ))}
        </Flex>
      )}
    </>
  );
};

<Button>Hover me</Button>;
export default TrelloBoardCard;
