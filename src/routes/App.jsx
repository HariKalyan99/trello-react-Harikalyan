import React from "react";
import {Layout} from "antd";
import TrelloFooter from "../components/TrelloFooter";
import TrelloDashboard from "../components/TrelloDashboard";
import TrelloNavigation from "../components/TrelloNavigation";
import TrelloStoreProvider from "../store/TrelloStoreProvider";

function App() {
  

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
    <TrelloStoreProvider>
      <Layout className="overflow-hidden w-[100%] max-w-[100%] h-screen">
      <TrelloNavigation />
      <TrelloDashboard />
      <TrelloFooter />
    </Layout>
    </TrelloStoreProvider>
  );
}

export default App;
