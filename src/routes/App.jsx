import React from "react";
import {Layout} from "antd";
import TrelloFooter from "../components/TrelloFooter";
import TrelloDashboard from "../components/TrelloDashboard";
import TrelloNavigation from "../components/TrelloNavigation";
import TrelloStoreProvider from "../store/TrelloStoreProvider";

function App() {
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
