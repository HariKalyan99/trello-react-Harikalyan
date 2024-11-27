import { Checkbox, Space, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const CheckItem = ({ deleteCheckItem, name, id, state, updateCheckItem }) => {
  const [getCheckedVal, setCheckedVal] = useState(state);

  const onChecked = (e) => {
    setCheckedVal(e.target.checked ? "complete" : "incomplete");
    updateCheckItem({
      checkItemId: id,
      state: e.target.checked ? "complete" : "incomplete",
    });
  };
  return (
    <Space className="flex">
      <Checkbox onChange={onChecked} checked={getCheckedVal === "complete"}>
        <span className={`${getCheckedVal === "complete" && "line-through"}`}>
          {name}
        </span>
      </Checkbox>
      <MdDeleteOutline
        className="text-red-400 hover:text-red-700 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          deleteCheckItem(id);
        }}
      />
     
    </Space>
  );
};

export default CheckItem;
