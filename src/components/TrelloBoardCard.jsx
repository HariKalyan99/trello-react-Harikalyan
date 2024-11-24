import React from 'react'
import { Flex, Card, Button, Tooltip} from "antd";
import { MdOutlineGroup } from "react-icons/md";
const TrelloBoardCard = () => {
//     const [arrow, setArrow] = useState('Show');
//   const mergedArrow = useMemo(() => {
//     if (arrow === 'Hide') {
//       return false;
//     }
//     if (arrow === 'Show') {
//       return true;
//     }
//     return {
//       pointAtCenter: true,
//     };
//   }, [arrow]);
  return (
    
        <Flex wrap direction="horizontal" className="h-[90%] w-[100%] gap-3 ">
        <Tooltip placement="bottom" title={<span>Excelsior!</span>} >
          <Card 
              hoverable
              className="h-[90px] w-[18%] flex justify-center items-center bg-slate-300"
              >
              <span className="text-lg w-[100%] text-white">Create new board</span>
            </Card>
                  </Tooltip>
            {[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((num ,ind) => <Card key={ind}
              hoverable
              className="h-[90px] w-[18%] flex justify-between items-start bg-slate-500 flex-col"
            >
              <span className="text-sm w-[100%]">new board</span>
              <MdOutlineGroup className="text-sm" />
            </Card>)}
          </Flex>
  )
}

      <Button>Hover me</Button>
export default TrelloBoardCard