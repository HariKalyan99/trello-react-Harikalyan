import { Modal, Space } from "antd";
import React, { useContext } from "react";
import { Col, InputNumber, Row, Slider } from "antd";
import TrelloBoardCard from "../TrelloBoardCard";
import { boardStore } from "../../store/TrelloStoreProvider";

const TrelloChecklistModal = ({
  modalOpen,
  setModalOpen,
  inputValue,
  setInputValue,
  name,
  addCheckList
}) => {
  const {setBoardPopOpen} = useContext(boardStore);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <Modal
      title={`Card name: ${name}`}
      centered
      open={modalOpen}
      onOk={() => {
        setBoardPopOpen(false);
        setModalOpen(false)}}
      onCancel={() => {
        setBoardPopOpen(false);
        setModalOpen(false)
      }}
    >
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{
              margin: "0 16px",
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>

      <TrelloBoardCard checklistActive addCheckList={addCheckList}/>
    
    </Modal>
  );
};

export default TrelloChecklistModal;
