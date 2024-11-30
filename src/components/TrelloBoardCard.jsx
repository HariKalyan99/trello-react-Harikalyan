import React from "react";
import { Card, Placeholder } from "react-bootstrap";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useSelector } from "react-redux";

const TrelloBoardCard = () => {
    const {boardListPending,
        boardListError} = useSelector(state => state.boards);
  return (
    <>
      <Card
        border="danger"
        style={{ width: "18rem", height: "7rem", overflow: "hidden" }}
        className="shadow card-hover"
      >
        {false ? (
          <Placeholder as={Card.Header} animation="glow">
            <Placeholder xs={7} />
          </Placeholder>
        ) : (
          <Card.Header className="d-flex justify-content-between align-items-center">
            Header <MdOutlineDeleteSweep className="del-hover fs-4" />
          </Card.Header>
        )}

        {false ? (
          <Placeholder as={Card.Body} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          </Placeholder>
        ) : (
          <Card.Body className="d-flex justify-content-start align-items-end">
            <Card.Title className="fs-6 fw-bold">Light Card Title</Card.Title>
          </Card.Body>
        )}
      </Card>
    </>
  );
};

export default TrelloBoardCard;
