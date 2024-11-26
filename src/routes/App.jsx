import React from "react";
import { Layout } from "antd";
import TrelloFooter from "../components/TrelloFooter";

import TrelloStoreProvider from "../store/TrelloStoreProvider";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <TrelloStoreProvider>
      <Layout className="overflow-hidden w-[100%] max-w-[100%] h-screen media-for-sm">
        <Outlet />
        <TrelloFooter />
      </Layout>
    </TrelloStoreProvider>
  );
}

export default App;
