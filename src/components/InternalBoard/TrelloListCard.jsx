import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../slices/boardInternalSlices/boardListSlice";

import { getCardCheckList } from "../../slices/boardInternalSlices/cardInternalChecklist/cardCheckListSlice";
import TrelloListCardModal from "./TrelloListCardModal";

const TrelloListCard = ({ card, listId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <>
      <ListGroup.Item
        className="bg-dark text-light d-flex justify-content-between align-items-center listCardHover"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleShow();
          dispatch(getCardCheckList(card.id));
        }}
      >
        {card.name}
        <div>
          <TiDeleteOutline
            className="fs-2 delHover"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(deleteCard({ cardId: card.id, listId }));
            }}
          />
        </div>
      </ListGroup.Item>

      <TrelloListCardModal handleClose={handleClose} show={show} />
    </>
  );
};

export default TrelloListCard;
