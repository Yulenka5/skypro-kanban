import { Wrapper, GlobalStyle } from "../../Global.Styles.js";
import Main from "../../components/Main/Main.jsx";
import Header from "../../components/Header/Header.jsx";
import { useContext, useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader.jsx";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api.js";
import { UserContext } from "../../context/userContext.jsx";
import { CardsContext } from "../../context/cardsContext.jsx";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const {cards, setCards} = useContext(CardsContext);
  const [error, setError] = useState(null);
  const userContext = useContext(UserContext)

  useEffect(() => {
    setIsLoading(true)
    getTasks(userContext.user.token)
      .then((res) => {
        setCards(res);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Header />
        {error ? <div>{error}</div> : isLoading ? <Loader /> : <Main cardList={cards} />}
      </Wrapper>
    </>
  );
}

export default HomePage;
