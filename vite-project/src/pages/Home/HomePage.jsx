import { Wrapper, GlobalStyle } from "../../Global.Styles.js";
import Main from "../../components/Main/Main.jsx";
import Header from "../../components/Header/Header.jsx";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader.jsx";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api.js";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getTasks().then((tasks) => {
      setCards(tasks);
    }).finally(()=>{
      setIsLoading(false)
    })
  }, []);

  function addCard() {
    const newTask = {
      id: cards.length + 1,
      topic: "Web Design",
      title: "Название задачи",
      date: "28.05.24",
      status: "Без статуса",
    };
    setCards([...cards, newTask]);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Header addCard={addCard} />
        {isLoading ? <Loader /> : <Main cardList={cards} />}
      </Wrapper>
    </>
  );
}

export default HomePage;
