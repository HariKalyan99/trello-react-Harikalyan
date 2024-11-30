import React from "react";
import { Card } from "react-bootstrap";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { delBoard } from "../slices/boardSlice";

const TrelloBoardCard = ({board}) => {
    const dispatch = useDispatch();
  return (
    <>
      <Card
        border="danger"
        style={{ width: "18rem", height: "7rem", overflow: "hidden" }}
        className="shadow card-hover"
      >
        
          <Card.Header className="d-flex justify-content-between align-items-center">
            Board <MdOutlineDeleteSweep className="del-hover fs-4" onClick={() => dispatch(delBoard(board.id))}/>
          </Card.Header>

        
          <Card.Body className="d-flex justify-content-start align-items-end">
            <Card.Title className="fs-6 fw-bold">{board.name}</Card.Title>
          </Card.Body>
      </Card>
    </>
  );
};

export default TrelloBoardCard;
