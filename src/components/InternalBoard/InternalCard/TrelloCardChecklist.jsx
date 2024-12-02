import React from "react";
import { Button, Card, Form, InputGroup, ProgressBar } from "react-bootstrap";
import { FaListCheck } from "react-icons/fa6";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";

const TrelloCardChecklist = ({ checkList }) => {
  return (
    <Card
      style={{
        minWidth: "18rem",
        width: "100%",
        height: "auto",
        minHeight: "8rem",
        overflow: "hidden",
        border: "none",
      }}
    >
      <Card.Header className="d-flex justify-content-between align-items-center bg-black text-light border-black">
        Checklist Name: {checkList.name}
        <MdOutlineDeleteSweep
          className="del-hover fs-3"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </Card.Header>
      <Card.Body className="d-flex justify-content-start align-items-start bg-black text-light flex-column">
        <Form className="mb-3 w-100">
          <ProgressBar
            now={70}
            variant="danger"
            label={`${70}%`}
            className="mb-4 mt-1"
          />
          {checkList.checkItems.map((checkItem, ind) => (
            <div
              key={ind}
              className="d-flex justify-content-between align-items-center border-bottom border-secondary my-2"
            >
              <div className="d-flex justify-content-center align-items-center gap-4">
              <Form.Check // prettier-ignore
                type="checkbox"
                id="default-checkbox"
                checked={checkItem.state === "complete"}
              />
              <span className={checkItem.state === "complete" && "text-decoration-line-through"}>
                {checkItem.name}
                </span>
              </div>
              <RxCross2 size={18} className="delHover text-secondary" />
            </div>
          ))}

          <InputGroup className="d-flex  pt-3" size="sm">
            <InputGroup.Text id="inputGroup-sizing-small" className="bg-dark">
              <FaListCheck className="text-light fs-5" />
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="name your checkitem"
              className="bg-light"
            />
            <Button variant="light" className="checkListSubmit" type="submit">
              <FaCheck className="text-black fs-5" />
            </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TrelloCardChecklist;
