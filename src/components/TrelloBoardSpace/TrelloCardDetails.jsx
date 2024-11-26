import { Popconfirm, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import TrelloCard from "./TrelloCard";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

const TrelloCardDetails = ({ list, deleteList, invoker }) => {
  const [addCardActive, setAddCardActive] = useState(false);
  const [listOfCards, setListOfCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [delCards, setDelCards] = useState("");
  const [getCheckListName, setCheckListsName] = useState("");
  const [getCheckList, setCheckLists] = useState([]);

  const addCardRef = useRef("");
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchCardsById = async (listId) => {
      try {
        const { data } = await axios.get(
          `https://api.trello.com/1/lists/${listId}/cards?key=${APIKey}&token=${APIToken}`,
          { signal }
        );

        setListOfCards(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.warn(error);
        }
      }
    };

    if (list.id?.length > 0) {
      fetchCardsById(list.id);
    }

    return () => {
      controller.abort();
    };
  }, [invoker]);

  useEffect(() => {
    const postNewCard = async ({ name, id }) => {
      try {
        const { data } = await axios.post(
          `https://api.trello.com/1/cards?idList=${id}&name=${name}&key=${APIKey}&token=${APIToken}`
        );
        setListOfCards([...listOfCards, data]);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.warn(error);
        }
      }
    };

    if (cards.id?.length > 0) {
      postNewCard(cards);
    }
  }, [cards]);


  useEffect(() => {
    const delCard = async (id) => {
      try {
        await axios.delete(
          `https://api.trello.com/1/cards/${id}?key=${APIKey}&token=${APIToken}`
        );
        setListOfCards(listOfCards.filter(x => x.id !== id));
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error(error);
        }
      }
    };

    if (delCards?.length > 0) {
        delCard(delCards);
    }
  }, [delCards]);


  


  useEffect(() => {
    const postNewCardCheckList = async ({ name, id }) => {
      console.log(name, id)
      try {
        const { data } = await axios.post(
          `https://api.trello.com/1/checklists?idCard=${id}&name=${name}&key=${APIKey}&token=${APIToken}`
        );
        setCheckLists(data);
        // setListOfCards([...listOfCards, data]);
      } catch (error) {
        console.error(error);
      }
    };



    if (getCheckListName.id?.length > 0) {
      postNewCardCheckList(getCheckListName);
    }
  }, [getCheckListName]);



  const delCardfromList = (id) => {
    setDelCards(id);
  };

  const addCardToList = (card) => {
    setCards(card);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCardToList({ name: addCardRef.current.value, id: list.id });
    addCardRef.current.value = "";
    setAddCardActive(!addCardActive);
  };

  // for checklist

  const addCheckList = (name, id) => {
    setCheckListsName({name, id});
  }


  return (
    <Space className="min-h-[10%] h-auto min-w-[320px] w-[300px] flex rounded-xl bg-slate-200 flex-col justify-center items-center py-3">
      <Space className="w-[300px] h-full flex justify-between">
        <span className="text-lg">{list.name}</span>
        <Popconfirm
          title="Archive this list"
          description="Are you sure to archive this list?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => deleteList(list.id)}
        >
          <BsThreeDots className="text-base cursor-pointer hover:text-slate-600" />
        </Popconfirm>
      </Space>

        
      {listOfCards?.length > 0 &&
        listOfCards.map(({ name, id }) => (
          <TrelloCard key={id} name={name} id={id} delCardfromList={delCardfromList} getCheckList={getCheckList} addCheckList={addCheckList}/>
        ))}

      {addCardActive ? (
        <form
          className="w-[300px] h-full flex justify-start items-start flex-col gap-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="Add a card"
            className="w-[300px] border p-3 shadow-lg"
            ref={addCardRef}
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
              <MdOutlineCancelScheduleSend className="hover:text-xl cursor-pointer text-red-500" />
            </span>
          </Space>
        </form>
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

export default TrelloCardDetails;
