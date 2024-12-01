import React, { useEffect } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { MdFolderDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards } from "../../slices/boardInternalSlices/listCardSlice";

const TrelloInternalListCard = ({list}) => {

    const {cardList} = useSelector(state => state.cards);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCards(list.id));
        console.log(cardList)
    }, [])
  return (
    <Card
      style={{ height: "20%", minWidth: "20rem", width: "20rem" }}
      className="bg-dark text-light"
    >
      <Card.Body className="d-flex flex-column gap-3">
        <Card.Title className="d-flex justify-content-between align-items-center">
          {list.name} <div><MdFolderDelete className="fs-2 delHover" /></div>
        </Card.Title>
        <ListGroup>
          <ListGroup.Item className="bg-dark text-light d-flex justify-content-between align-items-end listCardHover">
            Cras justo odio Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Et at commodi nihil eaque alias incidunt nemo voluptas sint
            laudantium labore?{" "}
            <div>
              <TiDeleteOutline className="fs-2 delHover" />
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="secondary">Add card +</Button>
      </Card.Body>
    </Card>
  );
};

export default TrelloInternalListCard;
