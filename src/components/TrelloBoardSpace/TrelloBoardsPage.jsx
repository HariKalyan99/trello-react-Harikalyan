import { Content } from "antd/es/layout/layout";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { Flex, Space } from "antd";
import { useParams } from "react-router-dom";
import TrelloCardDetails from "../TrelloCard/TrelloCardDetails";
import { IoAdd } from "react-icons/io5";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import TrelloNavigation from "../TrelloNavigation";
import ListCalls from "../utils/listApiServices";
const { getAllLists, removeAllCards, removeList, createNewList } =
  new ListCalls();

function pureBoardSpaceReducerFn(currentBoardSpace, action) {
  let boardSpace = currentBoardSpace;
  const { type } = action;
  switch (type) {
    case "INITIAL_LISTS":
      return (boardSpace = action.payload.data);
    case "ADD_LIST":
      return (boardSpace = [action.payload.data, ...currentBoardSpace]);
    default:
      return boardSpace;
  }
}

const TrelloBoardsPage = () => {
  const { id } = useParams();

  const [archiveList, setArchiveList] = useState("");
  const [archiveListOfCards, setarchiveListOfCards] = useState("");
  const [archiveListOfCardsId, setarchiveListOfCardsId] = useState("");

  const [invoker, setInvoker] = useState(false);
  const [invokerArchive, setInvokerArchive] = useState(false);

  const [listActive, setListActive] = useState(false);

  const [newList, setNewList] = useState("");
  const listInputRef = useRef("");
  const [lists, dispatchReducerBoardSpace] = useReducer(
    pureBoardSpaceReducerFn,
    []
  );

  // This segment uses the reducer functionality for state management.
  useEffect(() => {
    const fetchListsById = async (boardId) => {
      try {
        const data = await getAllLists(
          "https://api.trello.com/1/boards/",
          boardId
        );
        dispatchReducerBoardSpace({
          type: "INITIAL_LISTS",
          payload: {
            data,
          },
        });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.warn(error);
        }
      }
    };

    if (id) {
      fetchListsById(id);
    }
  }, [invoker]);

  useEffect(() => {
    const archiveAllCards = async (id) => {
      try {
        const data = await removeAllCards(
          "https://api.trello.com/1/lists/",
          id
        );
        if (data.status === 200) {
          setarchiveListOfCardsId(id);
          setInvokerArchive(!invokerArchive);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.warn(error);
        }
      }
    };

    if (archiveListOfCards?.length > 0) {
      archiveAllCards(archiveListOfCards);
    }
  }, [archiveListOfCards]);

  useEffect(() => {
    const archiveListFn = async (id) => {
      try {
        const data = await removeList("https://api.trello.com/1/lists/", id);
        if (data.status === 200) {
          setInvoker(!invoker);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.warn(error);
        }
      }
    };

    if (archiveList?.length > 0) {
      archiveListFn(archiveList);
    }
  }, [archiveList]);

  useEffect(() => {
    const postNewList = async (name) => {
      try {
        // const data = await axios.post(
        //   `https://api.trello.com/1/lists?name=${name}&idBoard=${id}&key=${APIKey}&token=${APIToken}`
        // );
        const data = await createNewList(
          "https://api.trello.com/1/lists",
          name,
          id
        );
        if (data.status === 200) {
          dispatchReducerBoardSpace({
            type: "ADD_LIST",
            payload: {
              data: data.data,
            },
          });
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.warn(error);
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

  const deleteCardsOfLists = (id) => {
    setarchiveListOfCards(id);
  };

  const handleSubmitList = (e) => {
    e.preventDefault();
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
                archiveListOfCardsId={archiveListOfCardsId}
                deleteList={deleteList}
                key={list.id}
                list={list}
                deleteCardsOfLists={deleteCardsOfLists}
                invokerArchive={invokerArchive}
              />
            ))}

          {listActive ? (
            <Space className="min-h-[7%] h-auto min-w-[320px] w-[300px] flex rounded-xl bg-slate-100 shadow-xl flex-col justify-center items-center py-3">
              <form
                id="listForm"
                className="w-[300px] h-full flex justify-start items-start flex-col gap-3"
                onSubmit={(e) => handleSubmitList(e)}
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
                    type="submit"
                    className="bg-slate-500 hover:bg-slate-700 w-[100px] text-base rounded text-white h-[40px]"
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
              </form>
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
