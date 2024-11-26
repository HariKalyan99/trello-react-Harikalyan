import { Checkbox, Space } from 'antd'
import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'

const CheckItem = ({deleteCheckItem, name, id, state}) => {
    const [getCheckedVal, setCheckedVal] = useState(state);
  const onChecked = (e) => {
    e.target.checked === true ? setCheckedVal(true) : setCheckedVal(false);
    deleteCheckItem(id)
    // console.log(`checked = ${}`, id, state);
  };
  return (
    <Space className="flex">
    <Checkbox  onChange={onChecked} checked={getCheckedVal === "complete"}>
      {name}
    </Checkbox>
    <MdDeleteOutline className="text-red-400 hover:text-red-700 cursor-pointer" onClick={() => deleteCheckItem(id)}/>
    </Space>
  )
}

export default CheckItem
