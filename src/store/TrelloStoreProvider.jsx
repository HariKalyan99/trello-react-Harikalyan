import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import BoardCalls from "../components/utils/boardsApiServices";
const { getAllBoards, createNewBoard, removeBoard } = new BoardCalls();
export const boardStore = createContext({
  boardList: [],
  addBoardFn: () => {},
  delBoardFn: () => {},
  skeletonLoad: true,
  setSkeletonLoad: () => {},
  boardPopOpen: false,
  setBoardPopOpen: () => {},
  boardSpinShow: false,
  boardSpinId: "",
  createBoardSpinShow: false,
});

function pureBoardReducerFn(currentBoardList, action) {
  let newBoardList = currentBoardList;
  const { type } = action;
  switch (type) {
    case "INITIAL_BOARDLIST":
      return (newBoardList = action.payload.data);
    case "ADD_BOARD":
      return (newBoardList = [...currentBoardList, action.payload.data]);
    case "DEL_BOARD":
      return (newBoardList = [
        ...currentBoardList.filter((x) => x.id !== action.payload.id),
      ]);
    default:
      return newBoardList;
  }
}

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

const TrelloStoreProvider = ({ children }) => {
  const [boardName, setBoardName] = useState("");
  const [deleteBoard, setDeleteBoard] = useState("");
  const [skeletonLoad, setSkeletonLoad] = useState(false);
  const [boardPopOpen, setBoardPopOpen] = useState(false);
  const [boardSpinShow, setBoardSpinShow] = useState(false);
  const [boardSpinId, setBoardSpinId] = useState("");
  const [createBoardSpinShow, setCreateBoardSpinShow] = useState(false);
  const [boardList, dispatchBoardReducerFn] = useReducer(
    pureBoardReducerFn,
    []
  );

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchBoards = async () => {
      try {
        setSkeletonLoad(true);
        const data = await getAllBoards(
          "https://api.trello.com/1/members/me/boards",
          signal
        );
        if (data) {
          setSkeletonLoad(false);
          dispatchBoardReducerFn({
            type: "INITIAL_BOARDLIST",
            payload: {
              data,
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

    fetchBoards();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const postNewBoard = async (name) => {
      try {
        setCreateBoardSpinShow(true);
        const data = await createNewBoard(
          "https://api.trello.com/1/boards/",
          name
        );
        setCreateBoardSpinShow(false);

        dispatchBoardReducerFn({
          type: "ADD_BOARD",
          payload: {
            data,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (boardName?.length >= 1) {
      postNewBoard(boardName);
    }
  }, [boardName]);

  useEffect(() => {
    const delBoardById = async (id) => {
      try {
        setBoardSpinId(id);
        setBoardSpinShow(true);
        let res = await removeBoard("https://api.trello.com/1/boards/", id);
        if (res === "Board Deleted") {
          setBoardSpinShow(false);
          dispatchBoardReducerFn({
            type: "DEL_BOARD",
            payload: {
              id,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (deleteBoard?.length >= 1) {
      delBoardById(deleteBoard);
    }
  }, [deleteBoard]);

  const addBoardFn = (name) => {
    setBoardName(name);
  };

  const delBoardFn = (id) => {
    setDeleteBoard(id);
  };

  return (
    <boardStore.Provider
      value={{
        boardList,
        addBoardFn,
        delBoardFn,
        skeletonLoad,
        boardPopOpen,
        setBoardPopOpen,
        boardSpinShow,
        boardSpinId,
        createBoardSpinShow,
      }}
    >
      {children}
    </boardStore.Provider>
  );
};

export default TrelloStoreProvider;
