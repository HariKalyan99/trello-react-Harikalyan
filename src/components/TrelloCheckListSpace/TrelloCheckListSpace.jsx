import React, { useState } from "react";
import { Col, Flex, Row, Slider, Space } from "antd";
import { Checkbox } from "antd";
import { GoChecklist } from "react-icons/go";

const TrelloCheckListSpace = () => {
const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
        setInputValue(newValue)
      };
  const onChecked = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <Flex className="h-full flex flex-col justify-start items-start gap-3 ">
       <span className="text-lg w-[100%] h-full text-black flex justify-start items-center gap-2">
              <GoChecklist className="text-slate-900"/> Checklist 1
              </span>
      <Row className="w-[400px]">
        <Col span={24}>
          <Slider
            min={1}
            max={20}
            onChange={onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
      </Row>

      {[1, 5].map((_, ind) => (
        <Checkbox key={ind} onChange={onChecked}>
          Check 1
        </Checkbox>
      ))}
      <Space className="flex">
      <button
        type="button"
        className="bg-slate-400 hover:bg-slate-700 w-[100px] text-sm rounded text-white h-[2rem]"
      >
        Add Item
      </button>
        <button
        type="button"
        className="bg-red-400 hover:bg-red-700 w-[150px] text-sm rounded text-white h-[2rem]"
      >
        Delete
      </button>
      </Space>
      <div className="w-full bg-slate-600 h-[1px]">
      </div>
    </Flex>
  );
};

export default TrelloCheckListSpace;
