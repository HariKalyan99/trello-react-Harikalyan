import React from "react";
import { ListGroup } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../slices/boardInternalSlices/boardListSlice";

const TrelloListCard = ({ card, listId }) => {
    const dispatch = useDispatch();
  return (
    <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-end listCardHover">
      {card.name}
      <div>
        <TiDeleteOutline className="fs-2 delHover" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch(deleteCard({cardId: card.id, listId}))
        }}/>
      </div>
    </ListGroup.Item>
  );
};

export default TrelloListCard;
