import React from 'react'
import { Card } from 'react-bootstrap';
import { MdOutlineDeleteSweep } from 'react-icons/md';

const TrelloCardChecklist = ({checkList}) => {
  return (
    <Card
          style={{
            minWidth: "18rem",
            width: "80%",
            height: "auto",
            minHeight: "8rem",
            overflow: "hidden",
            border: "none"
          }}
        >
          <Card.Header className="d-flex justify-content-between align-items-center bg-black text-light border-black">
            {checkList.name}
            <MdOutlineDeleteSweep
              className="del-hover fs-3"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          </Card.Header>
          <Card.Body className="d-flex justify-content-start align-items-start bg-black text-light flex-column">
            <Card.Title className="fs-6 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Title>
            <Card.Title className="fs-6 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Title>
            <Card.Title className="fs-6 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Title>
            <Card.Title className="fs-6 fw-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Card.Title>
          </Card.Body>
        </Card>
  )
}

export default TrelloCardChecklist