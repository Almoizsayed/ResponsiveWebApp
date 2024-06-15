import React from "react";
import Sidebar from "./Components/Sidebar";
import NavBar from "./Components/NavBar";
import UserCardView from "./Components/UserCardView";
import UserWidget from "./Components/UserWidget";
import Functionality from "./Components/Functionality";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <div className="w-full h-18 flex  flex-col">
          <NavBar />
          <UserCardView />
          <Functionality />
          <UserWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
