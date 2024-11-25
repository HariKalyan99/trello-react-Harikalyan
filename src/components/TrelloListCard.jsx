import { Space } from "antd";
import React from "react";
import { IoAdd } from "react-icons/io5";
import { MdOutlineCancelScheduleSend } from "react-icons/md";

const TrelloListCard = ({ setAddCardActive, addCardActive }) => {
  return (
    <Space className="min-h-[10%] h-auto min-w-[320px] w-full flex rounded-xl bg-slate-200 flex-col justify-center items-center py-3">
      <Space className="w-[300px] h-full flex justify-between">
        <span className="">To do</span>
        <span className="">Hello</span>
      </Space>

      <Space className="w-[300px] h-full border-2 flex justify-between bg-white p-2 rounded-lg text-wrap">
        <span className="">
          To do Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          cumque nostrum omnis! Rem ab error tempore sequi culpa provident
          tempora!
        </span>
      </Space>
      <Space className="w-[300px] h-full border-2 flex justify-between bg-white p-2 rounded-lg">
        <span className="">To do</span>
      </Space>
      <Space className="w-[300px] h-full border-2 flex justify-between bg-white p-2 rounded-lg">
        <span className="">To do</span>
      </Space>
      {addCardActive ? (
        <Space className="w-[300px] h-full flex justify-start items-start flex-col ">
          <input
            type="text"
            placeholder="Add a card"
            className="w-[300px] border p-3 shadow-lg"
            required
          />
          <Space className="w-full">
            <button
              type="submit"
              className="bg-slate-500 hover:bg-slate-700 w-[100px] text-base rounded text-white h-[40px]"
            >
              Add Card
            </button>
            <span
              className="text-base"
              onClick={() => setAddCardActive(!addCardActive)}
            >
              <MdOutlineCancelScheduleSend className="hover:text-xl cursor-pointer" />
            </span>
          </Space>
        </Space>
      ) : (
        <Space
          className="w-[300px] h-full flex justify-start"
          onClick={() => setAddCardActive(!addCardActive)}
        >
          <IoAdd size={25} />
          <span className="text-lg hover:text-xl cursor-pointer">
            {" "}
            Add a card
          </span>
        </Space>
      )}
    </Space>
  );
};

export default TrelloListCard;
