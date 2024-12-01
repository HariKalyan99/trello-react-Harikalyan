import React from "react";
import { Card } from "react-bootstrap";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { delBoard } from "../slices/boardSlice";
import { Link } from "react-router-dom";

const TrelloBoardCard = ({board}) => {
    const dispatch = useDispatch();
    const handleBoardClick = () => {

    }
  return (
    <Link to={`/board/${board.id}`} className="text-decoration-none">
      <Card
        border="danger"
        style={{width: "18rem", height: "7rem", overflow: "hidden" }}
        className="shadow card-hover"
        onClick={handleBoardClick}
      >
        
          <Card.Header className="d-flex justify-content-between align-items-center">
            Board <MdOutlineDeleteSweep className="del-hover fs-4" onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(delBoard(board.id))
            }}/>
          </Card.Header>

        
          <Card.Body className="d-flex justify-content-start align-items-end">
            <Card.Title className="fs-6 fw-bold">{board.name}</Card.Title>
          </Card.Body>
      </Card>
    </Link>
  );
};

export default TrelloBoardCard;
