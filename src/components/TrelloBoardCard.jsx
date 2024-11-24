import React, { useContext } from 'react'
import { Flex, Card, Button, Tooltip} from "antd";
import { MdOutlineGroup } from "react-icons/md";
import { boardStore } from '../store/TrelloStoreProvider';
import { Skeleton } from 'antd';
const TrelloBoardCard = () => {

    const {boardList, addBoardFn, delBoardFn} = useContext(boardStore)

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

const cardBack = {
    backgroundImage: 'linear-gradient(180deg,rgba(53, 68, 99, 0.6),rgba(53, 68, 99, 0.4)), url("https://images.unsplash.com/photo-1557626204-59dd03fd2d31?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundPosition: "10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
}


  return (
    
        <Flex wrap direction="horizontal" className="h-[90%] w-[100%] gap-3 justify-center md:justify-start">
        <Tooltip placement="top" title={<span>{10-boardList?.length} remaining</span>} >
          <Card 
              hoverable
              className="h-[90px] w-[250px] flex justify-center items-center bg-slate-300"
              onClick={() => addBoardFn("my new Board")}
              >
              <span className="text-lg w-[100%] h-full text-white">Create new board</span>
            </Card>
                  </Tooltip>
            {boardList?.length > 0 ? boardList.map(({name, id}) => <Card key={id}
              hoverable
              style={cardBack}
              className="h-[90px] w-[250px] flex justify-between items-start bg-slate-500 flex-col"
              onClick={() => delBoardFn(id)}
            >
              <span className="text-lg w-[100%] text-white">{name}</span>
              <MdOutlineGroup className="text-sm text-slate-100" />
            </Card>) : 
           
           [1,2,3,4].map((num, ind) => 
            
           <Skeleton.Node key={ind}
           active
          style={{width: 250, height: 90}}
         />
         )
          
            }
          </Flex>
  )
}

      <Button>Hover me</Button>
export default TrelloBoardCard