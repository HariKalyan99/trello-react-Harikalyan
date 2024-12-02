import React from "react";
import { Form } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteCheckItem } from "../../../slices/boardInternalSlices/cardInternalChecklist/cardCheckListSlice";

const TrelloCheckItem = ({ checkItem, checkList }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom border-secondary my-2">
      <div className="d-flex justify-content-center align-items-center gap-4">
        <Form.Check // prettier-ignore
          type="checkbox"
          id="default-checkbox"
          checked={checkItem.state === "complete"}
        />
        <span
          className={
            checkItem.state === "complete" && "text-decoration-line-through"
          }
        >
          {checkItem.name}
        </span>
      </div>
      <RxCross2
        size={18}
        className="delHover text-secondary"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dispatch(
            deleteCheckItem({
              idCheckItem: checkItem.id,
              checkListId: checkList.id,
            })
          );
        }}
      />
    </div>
  );
};

export default TrelloCheckItem;
