import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopExit from "./components/PopExit/PopExit";
import { useState } from "react";
import { cardLists } from "./data";



function App() {
const [cardList, setCardList] = useState(cardLists)

function addCardList (newCardList) {
  setCardList ([...cardList, newCardList])
}

  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCardList={addCardList}/>
        <Main cardList={cardList} />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
