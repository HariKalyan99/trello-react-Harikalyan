import React, { useEffect, useRef, useState } from "react";
import { Flex, Space, Spin } from "antd";
import { GoChecklist } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import CheckItem from "./CheckItem";
import { Progress } from "antd";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

const TrelloCheckListSpace = ({
  name,
  id,
  deleteCheckList,
  cardId,
  checkListArray,
}) => {
  const [checkItems, setCheckItems] = useState([]);
  const [getCheckItem, setCheckItem] = useState("");
  const [getDelCheckItem, setDelCheckItem] = useState("");
  const [getUpdateCheckItem, setUpdateCheckItem] = useState("");
  const [itemSpinShow, setItemSpinShow] = useState(false);

  const [displayCheck, setDisplayCheck] = useState(false);

  const checkItemRef = useRef("");

  useEffect(() => {
    const getCheckItem = async (id) => {
      try {
        const { data } = await axios.get(
          `https://api.trello.com/1/checklists/${id}/checkItems?key=${APIKey}&token=${APIToken}`
        );
        if (data?.length > 0) {
          setCheckItems(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (id?.length > 0) {
      getCheckItem(id);
    }
  }, [checkListArray]);

  useEffect(() => {
    const postCheckItem = async ({ id, name }) => {
      try {
        setItemSpinShow(true);
        const { data } = await axios.post(
          `https://api.trello.com/1/checklists/${id}/checkItems?name=${name}&key=${APIKey}&token=${APIToken}`
        );
        setItemSpinShow(false);

        setCheckItems([...checkItems, data]);
      } catch (error) {
        console.log(error);
      }
    };

    if (getCheckItem.id?.length > 0) {
      postCheckItem(getCheckItem);
    }
  }, [getCheckItem]);

  useEffect(() => {
    const deleteCheckItem = async (idCheckItem) => {
      try {
        setItemSpinShow(true);

        await axios.delete(
          `https://api.trello.com/1/checklists/${id}/checkItems/${idCheckItem}?key=${APIKey}&token=${APIToken}`
        );
        setItemSpinShow(false);

        setCheckItems(checkItems.filter((x) => x.id !== idCheckItem));
      } catch (error) {
        console.log(error);
      }
    };

    if (getDelCheckItem?.length > 0) {
      deleteCheckItem(getDelCheckItem);
    }
  }, [getDelCheckItem]);

  useEffect(() => {
    const putCheckItem = async ({ checkItemId, state, cardId }) => {
      try {
        setItemSpinShow(true);

        const { data } = await axios.put(
          `https://api.trello.com/1/cards/${cardId}/checkItem/${checkItemId}?key=${APIKey}&token=${APIToken}&state=${state}`
        );
        let findIndex = checkItems.findIndex((x) => x.id === checkItemId);
        checkItems[findIndex] = data;
        setItemSpinShow(false);

        setCheckItems([...checkItems]);
      } catch (error) {
        console.log(error);
      }
    };

    if (getUpdateCheckItem.checkItemId?.length > 0) {
      putCheckItem(getUpdateCheckItem);
    }
  }, [getUpdateCheckItem]);

  const addCheckItem = ({ id, name }) => {
    setCheckItem({ id, name });
  };

  const deleteCheckItem = (checkItemId) => {
    setDelCheckItem(checkItemId);
  };

  const updateCheckItem = ({ checkItemId, state }) => {
    setUpdateCheckItem({ checkItemId, state, cardId });
  };

  const percentConverter = (total, completed) => {
    return Math.ceil((100 / total) * completed);
  };
  const progressColors = {
    "0%": "#E2E8F0",
    "50%": "#94A3B8",
    "100%": "#475569",
  };

  return (
    <Flex className="h-full flex flex-col justify-start items-start gap-3 ">
      <span className="text-lg w-[100%] h-full text-black flex justify-start items-center gap-2">
        <GoChecklist className="text-slate-900" /> {name}
      </span>

      <Flex vertical gap="small" className="w-[100%]">
        <Progress
          percent={percentConverter(
            checkItems?.length,
            checkItems?.filter((x) => x.state === "complete")?.length
          )}
          type="line"
          strokeColor={progressColors}
        />
        <Spin spinning={itemSpinShow} delay={500} size="small"></Spin>
      </Flex>

      {checkItems?.length > 0 &&
        checkItems?.map(({ id, name, state }) => (
          <CheckItem
            key={id}
            state={state}
            deleteCheckItem={deleteCheckItem}
            name={name}
            id={id}
            updateCheckItem={updateCheckItem}
            cardId={cardId}
          />
        ))}
      {displayCheck ? (
        <Space>
          <form
            id="checkItemForm"
            className="flex flex-col justify-center items-start gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              addCheckItem({ name: checkItemRef.current.value, id });
              checkItemRef.current.value = "";
              setDisplayCheck(!displayCheck);
            }}
          >
            <input
              type="text"
              className="w-[100%] p-3 border-4"
              placeholder="Add a check item"
              ref={checkItemRef}
              required
            />
            <Space className="flex">
              <button
                type="submit"
                className="bg-slate-400 hover:bg-slate-700 w-[120px] text-sm rounded text-white h-[2rem]"
              >
                Add Check Item
              </button>

              <MdOutlineCancel
                onClick={() => setDisplayCheck(!displayCheck)}
                className="text-red-300 hover:text-red-400 text-xl"
              />
            </Space>
          </form>
        </Space>
      ) : (
        <Space className="flex">
          <button
            type="button"
            className="bg-slate-400 hover:bg-slate-700 w-[100px] text-sm rounded text-white h-[2rem]"
            onClick={() => setDisplayCheck(!displayCheck)}
          >
            Add Item
          </button>
          <button
            type="button"
            className="bg-red-300 hover:bg-red-500 w-[150px] text-sm rounded text-white h-[2rem]"
            onClick={() => deleteCheckList(id)}
          >
            Delete
          </button>
        </Space>
      )}

      <div className="w-full bg-slate-600 h-[1px]"></div>
    </Flex>
  );
};

export default TrelloCheckListSpace;
