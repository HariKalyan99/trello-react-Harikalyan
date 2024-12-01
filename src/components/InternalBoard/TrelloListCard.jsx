import React, { useState } from "react";
import { Button, Col, Form, Image, InputGroup, ListGroup, Modal } from "react-bootstrap";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../slices/boardInternalSlices/boardListSlice";
import { BsUiChecks } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const TrelloListCard = ({ card, listId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
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

      <Modal
        show={show}
        backdrop="static"
        keyboard={true}
        centered
        size="lg"
        style={{ border: "3px solid rgb(245, 103, 126)" }}
      >
        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-dark border-2 border-light rounded-circle spanHover" onClick={handleClose}>
            <RxCross2 size={25} className="text-light" />
      </span>
        <Modal.Header className="bg-dark text-white ">
          <Modal.Title>Card name: "{card.name}"</Modal.Title>
        </Modal.Header>
        {true && <Modal.Body className="bg-dark text-white d-flex justify-content-center" style={{minHeight: "40vh"}}>
          <Col xs={4} md={4}>
          <Image src="https://i.pinimg.com/originals/4c/d2/e3/4cd2e3548da43baeeb65b87c7a45e554.gif" roundedCircle />
        </Col>
          {/* https://i.pinimg.com/originals/0f/c0/cb/0fc0cba207b7b73d554cae3ef292bc72.gif */}
        </Modal.Body>}
        <Modal.Footer className="bg-dark text-white border-5">
          <InputGroup className="d-flex flex-column gap-3">
            <form
              className="d-flex gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <InputGroup className="d-flex" size="sm">
                <InputGroup.Text
                  id="inputGroup-sizing-default"
                  className="bg-dark"
                >
                  <TbChecklist className="text-light fs-3"   />
                </InputGroup.Text>
                <Form.Control
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="name your card"
                  className="bg-light"
                />
              </InputGroup>
              <Button variant="danger" onClick={handleClose}>
                <FaWindowClose />
              </Button>
              <Button variant="light" type="submit" >
                <BsUiChecks className="fs-3"/>
              </Button>
            </form>
          </InputGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TrelloListCard;
