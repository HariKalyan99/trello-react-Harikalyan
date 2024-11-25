import { Modal, Space } from "antd";
import React from "react";
import { Col, InputNumber, Row, Slider } from "antd";

const TrelloChecklistModal = ({
  modal2Open,
  setModal2Open,
  inputValue,
  setInputValue,
  name,
}) => {
  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <Modal
      title="Vertically centered modal dialog"
      centered
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={() => setModal2Open(false)}
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

      <Space>
        <span>{name}</span>
      </Space>
    </Modal>
  );
};

export default TrelloChecklistModal;
