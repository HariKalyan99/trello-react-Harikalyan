import React, { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import TrelloNavigation from "../TrelloNavigation";
import TrelloInternalListCard from "./TrelloInternalListCard";
import { useDispatch, useSelector } from "react-redux";
import { getListsOfBoards } from "../../slices/boardInternalSlices/boardListSlice";
import { useParams } from "react-router-dom";

const TrelloBoardInternal = () => {
  const {listsOfBoard} = useSelector(state => state.lists)
  const dispatch = useDispatch();
  let {boardId} = useParams();
  useEffect(() => {
    dispatch(getListsOfBoards(boardId))
    console.log(listsOfBoard)
  }, [dispatch])
  return (
    <Container fluid className="min-vh-100 my-5">
        <TrelloNavigation />
      <div className="scrollContainer">
      {listsOfBoard.map((list) => <TrelloInternalListCard key={list.id} list={list} />)}
      <Card
      style={{ height: "20%", minWidth: "20rem", width: "20rem" }}
      className="bg-dark text-light"
    >
      <Card.Body className="d-flex flex-column gap-3">
        <Button variant="secondary">Add List +</Button>
      </Card.Body>
    </Card>
      </div>
    </Container>
  );
};

export default TrelloBoardInternal;
