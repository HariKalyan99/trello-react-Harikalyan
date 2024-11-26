import { Checkbox, Space } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'

const CheckItem = ({deleteCheckItem, name, id, state, updateCheckItem}) => {
    const [getCheckedVal, setCheckedVal] = useState(state);
    
    
     
  const onChecked = (e) => {
    // console.log(e.target.checked)
    setCheckedVal(e.target.checked ? "complete" : "incomplete")
    updateCheckItem({checkItemId: id, state: e.target.checked ? "complete" : "incomplete"})
    // console.log(`checked = ${}`, id, state);
  };
  return (
    <Space className="flex">
    <Checkbox  onChange={onChecked} checked={getCheckedVal === "complete"} >
      {name}
    </Checkbox>
    <MdDeleteOutline className="text-red-400 hover:text-red-700 cursor-pointer" onClick={(e) => {
        e.preventDefault();
        deleteCheckItem(id)
    }}/>
    </Space>
  )
}

export default CheckItem
