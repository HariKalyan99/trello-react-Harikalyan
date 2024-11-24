import React from "react";
import {Layout} from "antd";
import TrelloFooter from "../components/TrelloFooter";
import TrelloDashboard from "../components/TrelloDashboard";
import TrelloNavigation from "../components/TrelloNavigation";

function App() {
  // useEffect(() => {
  //   const fetchBoard = async() => {
  //     try {
  //       const data = await fetch(`https://api.trello.com/1/members/me/boards?key=${APIKey}&token=${APIToken}`, {
  //         method: 'GET',
  //         headers: {
  //           'Accept': 'application/json'
  //         }
  //       })
  //       const jsonData = await data.json();
  //       console.log(jsonData.map(x => x.id))
  //       const id = jsonData.map(x => x.id)[0];
  //       fetchBoardId(id)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchBoard();

  // }, [])

  // const fetchBoardId = async(idBoard) => {
  //   try {
  //     const data = await fetch(`https://api.trello.com/1/boards/${idBoard}?key=${APIKey}&token=${APIToken}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Accept': 'application/json'
  //       }
  //     })
  //     const jsonData = await data.json();
  //     console.log(jsonData)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

 
  return (
    <Layout className="overflow-hidden w-[100%] max-w-[100%] h-screen">
      <TrelloNavigation />
      <TrelloDashboard />
      <TrelloFooter />
    </Layout>
  );
}

export default App;
