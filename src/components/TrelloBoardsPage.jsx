import { Content } from "antd/es/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import TrelloNavigation from "./TrelloNavigation";
import { Flex, Space } from "antd";
import { data, useParams } from "react-router-dom";
import axios from "axios";
import TrelloCardDetails from "./TrelloCardDetails";
import { IoAdd } from "react-icons/io5";
import { MdOutlineCancelScheduleSend } from "react-icons/md";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

const TrelloBoardsPage = () => {
  const { id } = useParams();

  const [lists, setLists] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [invoker, setInvoker] = useState(false);

  const [listActive, setListActive] = useState(false);

  const [newList, setNewList] =useState("");
  const listInputRef = useRef("");

  useEffect(() => {
    const fetchListsById = async (boardId) => {
      try {
        const { data } = await axios.get(
          `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`
        );
        setLists(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(error);
        }
      }
    };

    if (id) {
      fetchListsById(id);
    }
  }, []);

  useEffect(() => {
    const archiveAllCards = async (id) => {
      try {
        const data = await axios.post(
          `https://api.trello.com/1/lists/${id}/archiveAllCards?key=${APIKey}&token=${APIToken}`
        );
        if (data.status === 200) {
          setInvoker(!invoker);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(error);
        }
      }
    };

    if (archiveList?.length > 0) {
      archiveAllCards(archiveList);
    }
  }, [archiveList]);




  useEffect(() => {
    const postNewList = async (name) => {
      try {
        const data = await axios.post(
          
          `https://api.trello.com/1/lists?name=${name}&idBoard=${id}&key=${APIKey}&token=${APIToken}`
        );
        if (data.status === 200) {
          
          setLists([data.data, ...lists ])
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(error);
        }
      }
    };

    if (newList?.length > 0) {
      postNewList(newList);
    }
  }, [newList]);

  const deleteList = (id) => {
    setArchiveList(id);
  };

  const handleClick = () => {
    setNewList(listInputRef.current.value);
    listInputRef.current.value = "";
    setListActive(!listActive);
  };

  return (
    <>
      <TrelloNavigation boardsPage />
      <Content className="bg-slate-400 h-screen w-full flex flex-col justify-start items-center gap-1">
        <Flex className="scrollableFlex w-[99%] flex overflow-x-auto justify-start items-start max-w-[200rem] margin-0 h-[100%] gap-2 py-3">
          {lists?.length > 0 &&
            lists?.map((list, ind) => (
              <TrelloCardDetails
                invoker={invoker}
                deleteList={deleteList}
                key={list.id}
                list={list}
              />
            ))}

          {listActive ? (
            <Space className="min-h-[7%] h-auto min-w-[320px] w-[300px] flex rounded-xl bg-slate-100 shadow-xl flex-col justify-center items-center py-3">
              <div
                className="w-[300px] h-full flex justify-start items-start flex-col gap-3"
                
              >
                <input
                  type="text"
                  placeholder="Add a list"
                  className="w-[300px] border p-3 shadow-lg"
                  required
                  ref={listInputRef}
                />
                <Space className="w-full">
                  <button
                    type="button"
                    className="bg-slate-500 hover:bg-slate-700 w-[100px] text-base rounded text-white h-[40px]"
                    onClick={() => handleClick()}
                  >
                    Add List
                  </button>
                  <span
                    className="text-base"
                    onClick={() => setListActive(!listActive)}
                  >
                    <MdOutlineCancelScheduleSend className="hover:text-xl cursor-pointer text-red-500" />
                  </span>
                </Space>
              </div>
            </Space>
          ) : (
            <Space
              className="min-h-[7%] h-auto min-w-[320px] w-[300px] flex rounded-xl bg-slate-100 shadow-xl flex-col justify-center items-center py-3"
              onClick={() => setListActive(!listActive)}
            >
              <Space className="w-[300px] h-full flex justify-start">
                <IoAdd size={25} />
                <span className="text-lg hover:text-xl cursor-pointer">
                  {" "}
                  Add another list
                </span>
              </Space>
            </Space>
          )}
        </Flex>
      </Content>
    </>
  );
};

export default TrelloBoardsPage;
