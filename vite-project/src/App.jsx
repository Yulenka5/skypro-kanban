import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import PopBrowse from "./components/PopBrowse/PopBrowse";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopExit from "./components/PopExit/PopExit";
import { useEffect, useState } from "react";
import { cardList } from "./data/data";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState(cardList)
 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, []);

  function addCard () {
const newTask = {
  id: cards.length + 1,
  topic: "Web Design",
  title: "Название задачи",
  date: "28.05.24",
  status: "Без статуса",
}
setCards([...cards, newTask])
  }

  return (
    <>
      <div className="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard}/>
        {isLoading ? <h1>Данные загружаются...</h1> : <Main cardList={cards} />}
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
