import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
const boardBg = {
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  boxShadow: "1px 1px 20px rgb(253, 130, 151)",
};
import TrelloNavigation from "./TrelloNavigation";
import TrelloBoardCard from "./TrelloBoardCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBoards } from "../slices/boardSlice";

const TrelloBoardSpace = () => {
  const { boardList } = useSelector((state) => state.boards);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllBoards());
  // }, [dispatch]);
  return (
    <Container fluid className="min-vh-100 my-5">
      <TrelloNavigation />
      <Container className="vh-100 position-relative">
        <Container
          className="w-100 d-flex justify-center align-items-center"
          style={{ height: "10rem" }}
        >
          <h1 className="position-absolute top-10">
            Work
            <span
              className="position-relative z-n1"
              style={{ color: "rgb(255, 100, 120)" }}
            >
              space
            </span>{" "}
          </h1>
        </Container>
        <Container
          className="min-h-auto h-75 w-100 d-flex flex-column gap-5 border border-light"
          style={boardBg}
        >
          <h1 className="text-decoration-underline text-left">Boards</h1>

          <Container className="min-h-auto h-75 d-flex flex-wrap gap-3 justify-content-start align-items-start">
            <Card
              border="light"
              style={{ width: "18rem", height: "7rem" }}
              className="card-add-hover"
            >
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {10 - boardList.length}
              </span>
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title>Add a Board +</Card.Title>
              </Card.Body>
            </Card>
            {boardList.map((_, ind) => (
              <TrelloBoardCard key={ind} />
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default TrelloBoardSpace;
