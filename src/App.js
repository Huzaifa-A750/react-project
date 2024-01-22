import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import Card from "./components/cards";
import TextCard from "./components/text-card"
import Reviews from "./components/reviews";
import Homes from "./components/homes";
import Dropdown from "./components/dropdown"

function App() {
  return (
    <div className="bg-[#F1F1F1]">
      <Header />
      <Content />
      <Card />
      <TextCard />
      <Reviews />
      <Homes />
      <Dropdown />
    </div>
  );
}

export default App;
